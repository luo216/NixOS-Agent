export function mergeToolCallEvent(prev, next) {
  const merged = {
    ...prev,
    ...next,
  };

  if (prev?.content || next?.content) {
    merged.content = {
      ...(prev?.content || {}),
      ...(next?.content || {}),
    };
  }

  if (prev?.args || next?.args) {
    merged.args = {
      ...(prev?.args || {}),
      ...(next?.args || {}),
    };
  }

  if (typeof prev?.output === "string" || typeof next?.output === "string") {
    const prevOutput = typeof prev?.output === "string" ? prev.output : "";
    const nextOutput = typeof next?.output === "string" ? next.output : "";
    if (prevOutput && nextOutput && next?.status === "pending") {
      merged.output = `${prevOutput}${nextOutput}`;
    } else {
      merged.output = nextOutput || prevOutput;
    }
  }

  return merged;
}

function mergePlanEntries(prevEntries, nextEntries) {
  const previous = Array.isArray(prevEntries) ? prevEntries : [];
  const incoming = Array.isArray(nextEntries) ? nextEntries : [];

  if (incoming.length === 0) {
    return previous;
  }

  return incoming.map((entry, idx) => {
    const candidateId =
      typeof entry?.id === "string" && entry.id.trim()
        ? entry.id.trim()
        : typeof entry?.title === "string" && entry.title.trim()
          ? entry.title.trim()
          : typeof entry?.content === "string" && entry.content.trim()
            ? entry.content.trim()
            : `plan-${idx}`;

    const previousEntry = previous.find((item) => {
      if (!item || typeof item !== "object") return false;
      const itemId =
        typeof item?.id === "string" && item.id.trim()
          ? item.id.trim()
          : typeof item?.title === "string" && item.title.trim()
            ? item.title.trim()
            : typeof item?.content === "string" && item.content.trim()
              ? item.content.trim()
              : "";
      return itemId === candidateId;
    });

    return {
      ...previousEntry,
      ...entry,
      id: typeof entry?.id === "string" ? entry.id : previousEntry?.id || "",
      title: typeof entry?.title === "string" ? entry.title : previousEntry?.title || "",
      content:
        typeof entry?.content === "string" && entry.content.trim()
          ? entry.content
          : typeof previousEntry?.content === "string"
            ? previousEntry.content
            : "",
      details:
        typeof entry?.details === "string"
          ? entry.details
          : typeof previousEntry?.details === "string"
            ? previousEntry.details
            : "",
      status:
        typeof entry?.status === "string" && entry.status.trim()
          ? entry.status
          : typeof previousEntry?.status === "string"
            ? previousEntry.status
            : "pending",
      priority:
        typeof entry?.priority === "string"
          ? entry.priority
          : typeof previousEntry?.priority === "string"
            ? previousEntry.priority
            : "",
    };
  });
}

export function mergePlanEvent(prev, next) {
  const prevExplanation = typeof prev?.explanation === "string" ? prev.explanation : "";
  const nextExplanation = typeof next?.explanation === "string" ? next.explanation : "";

  return {
    ...prev,
    ...next,
    itemId:
      typeof next?.itemId === "string" && next.itemId.trim()
        ? next.itemId
        : typeof prev?.itemId === "string"
          ? prev.itemId
          : "",
    entries: mergePlanEntries(prev?.entries, next?.entries),
    explanation:
      next?.incremental && prevExplanation && nextExplanation
        ? `${prevExplanation}\n${nextExplanation}`.trim()
        : nextExplanation || prevExplanation,
  };
}

export function normalizeCodexEvents(events) {
  const normalized = [];
  const toolCallIndexById = new Map();
  let lastPlanIndex = -1;

  events.forEach((event) => {
    if (event?.type === "assistant") {
      const last = normalized[normalized.length - 1];
      if (last?.type === "assistant") {
        normalized[normalized.length - 1] = {
          ...last,
          chunk: {
            text: `${last?.chunk?.text || ""}${event?.chunk?.text || ""}`,
            thought: `${last?.chunk?.thought || ""}${event?.chunk?.thought || ""}`,
          },
        };
      } else {
        normalized.push(event);
      }
      return;
    }

    if (event?.type === "plan") {
      if (lastPlanIndex >= 0) {
        normalized[lastPlanIndex] = mergePlanEvent(normalized[lastPlanIndex], event);
      } else {
        lastPlanIndex = normalized.length;
        normalized.push(event);
      }
      return;
    }

    if (event?.type === "tool_call" && typeof event?.id === "string" && event.id.trim()) {
      const id = event.id.trim();
      if (toolCallIndexById.has(id)) {
        const idx = toolCallIndexById.get(id);
        normalized[idx] = mergeToolCallEvent(normalized[idx], event);
      } else {
        toolCallIndexById.set(id, normalized.length);
        normalized.push(event);
      }
      return;
    }

    lastPlanIndex = -1;
    normalized.push(event);
  });

  return normalized;
}

function createTimelineBlock(kind, payload = {}) {
  return {
    kind,
    ...payload,
  };
}

export function buildTimelineBlocks(entry) {
  const events = Array.isArray(entry?.raw?.receiveMessages) ? entry.raw.receiveMessages : [];
  const normalizedEvents = normalizeCodexEvents(events);

  if (normalizedEvents.length === 0) {
    if (isPendingStreamingEntry(entry)) {
      return [createTimelineBlock("streaming_placeholder")];
    }

    return [
      createTimelineBlock("fallback_markdown", {
        text: entry?.assistantText || JSON.stringify(entry, null, 2),
      }),
    ];
  }

  return normalizedEvents.map((event, idx) => {
    const eventKey = `${entry?.createdAt || "entry"}-${idx}`;

    switch (event?.type) {
      case "assistant":
        return createTimelineBlock("assistant_message", { event, eventKey });
      case "plan":
        return createTimelineBlock("plan_block", { event, eventKey });
      case "exit_plan_mode":
        return createTimelineBlock("exit_plan_mode_block", { event, eventKey });
      case "tool_call":
        return createTimelineBlock("tool_call_block", { event, eventKey });
      case "task_finish":
        return createTimelineBlock("finish_block", {
          event,
          eventKey,
          interrupted: Boolean(entry?._interrupted),
        });
      case "error":
        return createTimelineBlock("error_block", { event, eventKey });
      case "warning":
        return createTimelineBlock("warning_block", { event, eventKey });
      case "status":
        return createTimelineBlock("status_block", { event, eventKey });
      case "reasoning":
        return createTimelineBlock("reasoning_block", { event, eventKey });
      default:
        return createTimelineBlock("generic_block", { event, eventKey });
    }
  });
}

export function createStreamingAssistantEntry(createdAt = new Date().toISOString()) {
  return {
    kind: "codex",
    createdAt,
    assistantText: "",
    raw: {
      receiveMessages: [],
    },
    _streaming: true,
    _runtimePlaceholder: true,
  };
}

function isInterruptSystemEntry(entry) {
  return (
    entry?.kind === "system" &&
    entry?.raw?.type === "system" &&
    entry?.raw?.text === "interrupt_triggered"
  );
}

export function buildDisplayMessages(entries) {
  const source = Array.isArray(entries) ? entries : [];
  const display = [];

  source.forEach((entry) => {
    if (isInterruptSystemEntry(entry)) {
      for (let i = display.length - 1; i >= 0; i -= 1) {
        const candidate = display[i];
        if (candidate?.kind === "codex" || candidate?.kind === ["i", "f", "l", "o", "w"].join("")) {
          display[i] = {
            ...candidate,
            _interrupted: true,
          };
          return;
        }
      }
      return;
    }
    display.push(entry);
  });

  return display;
}

export function buildRuntimeMessages(runtime) {
  const history = Array.isArray(runtime?.history) ? runtime.history : [];
  const inFlight = runtime?.inFlight;
  const entries = [...history];

  if (!inFlight) {
    return buildDisplayMessages(entries);
  }

  const trailingInterrupt = entries.length > 0 && isInterruptSystemEntry(entries[entries.length - 1]) ? entries.pop() : null;
  let hasSettledHistoryAssistant = false;
  for (let i = entries.length - 1; i >= 0; i -= 1) {
    const entry = entries[i];
    if (!entry) continue;
    if (entry.kind === "system") continue;
    hasSettledHistoryAssistant = entry.kind === "codex" || entry.kind === ["i", "f", "l", "o", "w"].join("");
    break;
  }

  if (!hasSettledHistoryAssistant && inFlight?.assistantMessage) {
    entries.push({
      ...inFlight.assistantMessage,
      _runtimePhase: inFlight.phase || "",
    });
  } else if (!hasSettledHistoryAssistant && inFlight.phase === "waiting") {
    entries.push(createStreamingAssistantEntry(inFlight.startedAt));
  }

  if (trailingInterrupt) {
    entries.push(trailingInterrupt);
  }

  return buildDisplayMessages(entries);
}

export function isPendingStreamingEntry(entry) {
  return Boolean(entry?._streaming) && (!Array.isArray(entry?.raw?.receiveMessages) || entry.raw.receiveMessages.length === 0);
}

export function findLatestCompletedToolCallFingerprint(entries) {
  const list = Array.isArray(entries) ? entries : [];
  for (let i = list.length - 1; i >= 0; i -= 1) {
    const entry = list[i];
    const events = Array.isArray(entry?.raw?.receiveMessages) ? entry.raw.receiveMessages : [];
    for (let j = events.length - 1; j >= 0; j -= 1) {
      const event = events[j];
      if (event?.type === "tool_call" && event?.status === "completed") {
        const eventId = typeof event?.id === "string" && event.id.trim() ? event.id.trim() : "no-id";
        const toolName =
          typeof event?.toolName === "string" && event.toolName.trim() ? event.toolName.trim() : "unknown";
        const createdAt = typeof entry?.createdAt === "string" && entry.createdAt ? entry.createdAt : "no-time";
        return `${createdAt}|${toolName}|${eventId}`;
      }
    }
  }
  return "";
}

export function replaceAssistantTextEvents(events, nextText) {
  const source = Array.isArray(events) ? events : [];
  const nextEvents = [];
  let inserted = false;

  source.forEach((event) => {
    if (event?.type === "assistant") {
      if (!inserted) {
        nextEvents.push({
          type: "assistant",
          chunk: {
            text: nextText,
          },
        });
        inserted = true;
      }
      return;
    }
    nextEvents.push(event);
  });

  if (!inserted && nextText.trim()) {
    nextEvents.unshift({
      type: "assistant",
      chunk: {
        text: nextText,
      },
    });
  }

  return nextEvents;
}

export function getEntryEditableText(entry) {
  if (entry?.kind === "user" && typeof entry?.raw?.text === "string") {
    return entry.raw.text;
  }

  if (typeof entry?.assistantText === "string" && entry.assistantText.trim()) {
    return entry.assistantText;
  }

  const events = Array.isArray(entry?.raw?.receiveMessages) ? entry.raw.receiveMessages : [];
  return events
    .filter((event) => event?.type === "assistant" && typeof event?.chunk?.text === "string")
    .map((event) => event.chunk.text)
    .join("");
}

export function isEntryTextEditable(entry) {
  if (!entry || entry?._streaming) return false;
  if (entry?.kind === "user" && typeof entry?.raw?.text === "string") {
    return true;
  }
  return Boolean(getEntryEditableText(entry).trim());
}

export function applyMessageOverrides(entries, overrideMap) {
  const source = Array.isArray(entries) ? entries : [];
  const overrides = overrideMap && typeof overrideMap === "object" ? overrideMap : {};

  return source
    .map((entry, idx) => {
      const entryKey = `${entry?.createdAt || "msg"}-${idx}`;
      const override = overrides[entryKey];
      if (!override) return entry;
      if (override.action === "delete") return null;
      if (override.action !== "edit") return entry;

      const nextText = typeof override.text === "string" ? override.text : "";
      if (entry?.kind === "user" && typeof entry?.raw?.text === "string") {
        return {
          ...entry,
          raw: {
            ...entry.raw,
            text: nextText,
          },
        };
      }

      const receiveMessages = Array.isArray(entry?.raw?.receiveMessages) ? entry.raw.receiveMessages : [];
      return {
        ...entry,
        assistantText: nextText,
        raw: {
          ...entry.raw,
          receiveMessages: replaceAssistantTextEvents(receiveMessages, nextText),
        },
      };
    })
    .filter(Boolean);
}
