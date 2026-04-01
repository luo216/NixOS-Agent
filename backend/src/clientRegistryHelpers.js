import { normalizeToolCallItem, RuntimeMessageType } from "./runtime/clientAdapter.js";

export function cloneJson(value) {
  return value == null ? value : JSON.parse(JSON.stringify(value));
}

const MAX_TRANSPORT_IMAGE_DATA_URL_LENGTH = 120_000;

function sanitizeTransportImage(image) {
  if (!image || typeof image !== "object") return image;
  const dataUrl = typeof image.dataUrl === "string" ? image.dataUrl : "";
  if (!dataUrl || dataUrl.length <= MAX_TRANSPORT_IMAGE_DATA_URL_LENGTH) {
    return image;
  }

  return {
    ...image,
    dataUrl: "",
    omitted: true,
    originalSize: dataUrl.length,
  };
}

function sanitizeTransportEntry(entry) {
  if (!entry || typeof entry !== "object") return entry;
  if (entry.kind !== "user" || !entry.raw || typeof entry.raw !== "object") {
    return entry;
  }

  const images = Array.isArray(entry.raw.images) ? entry.raw.images.map(sanitizeTransportImage) : [];
  return {
    ...entry,
    raw: {
      ...entry.raw,
      images,
    },
  };
}

export function sanitizeRuntimeForTransport(runtime) {
  if (!runtime || typeof runtime !== "object") return runtime;
  const history = Array.isArray(runtime.history) ? runtime.history.map(sanitizeTransportEntry) : runtime.history;
  const inFlight =
    runtime.inFlight && typeof runtime.inFlight === "object"
      ? {
          ...runtime.inFlight,
          inputMessage: sanitizeTransportEntry(runtime.inFlight.inputMessage),
        }
      : runtime.inFlight;

  return {
    ...runtime,
    history,
    inFlight,
  };
}

export function createRuntimeAssistantMessage(runtimeMessageKind, createdAt = new Date().toISOString()) {
  return {
    kind: runtimeMessageKind,
    createdAt,
    assistantText: "",
    raw: {
      receiveMessages: [],
    },
  };
}

export function appendAssistantEvent(message, event, runtimeMessageKind) {
  const previousEvents = Array.isArray(message?.raw?.receiveMessages) ? message.raw.receiveMessages : [];
  const nextEvents = [...previousEvents, event];
  const assistantText = nextEvents
    .filter((item) => item?.type === RuntimeMessageType.ASSISTANT && typeof item?.chunk?.text === "string")
    .map((item) => item.chunk.text)
    .join("");

  return {
    ...(message || createRuntimeAssistantMessage(runtimeMessageKind)),
    assistantText,
    raw: {
      receiveMessages: nextEvents,
    },
  };
}

function createSyntheticCreatedAt(thread, turnIndex, itemIndex = 0) {
  const baseSeconds =
    typeof thread?.createdAt === "number" && Number.isFinite(thread.createdAt)
      ? thread.createdAt
      : Math.floor(Date.now() / 1000);
  const offsetMs = turnIndex * 1000 + itemIndex * 10;
  return new Date(baseSeconds * 1000 + offsetMs).toISOString();
}

function extractTextFromUserInput(input) {
  if (!input || typeof input !== "object") return "";
  if (input.type === "text" && typeof input.text === "string") {
    return input.text.trim();
  }
  if (input.type === "image" && typeof input.url === "string" && input.url.trim()) {
    return `[image] ${input.url.trim()}`;
  }
  if (input.type === "localImage" && typeof input.path === "string" && input.path.trim()) {
    return `[localImage] ${input.path.trim()}`;
  }
  if (input.type === "skill" && typeof input.name === "string") {
    return `[skill] ${input.name.trim()}`;
  }
  if (input.type === "mention" && typeof input.name === "string") {
    return `[mention] ${input.name.trim()}`;
  }
  return "";
}

function extractImageFromUserInput(input) {
  if (!input || typeof input !== "object") return null;
  if (input.type === "image" && typeof input.url === "string" && input.url.trim()) {
    return {
      name: typeof input.name === "string" && input.name.trim() ? input.name.trim() : "image",
      mimeType: typeof input.mimeType === "string" && input.mimeType.trim() ? input.mimeType.trim() : "",
      dataUrl: input.url.trim(),
    };
  }
  if (input.type === "localImage" && typeof input.path === "string" && input.path.trim()) {
    return {
      name: typeof input.name === "string" && input.name.trim() ? input.name.trim() : "local-image",
      mimeType: typeof input.mimeType === "string" && input.mimeType.trim() ? input.mimeType.trim() : "",
      path: input.path.trim(),
    };
  }
  return null;
}

function buildRuntimeMessageFromThreadItems(thread, turn, turnIndex, runtimeMessageKind) {
  const receiveMessages = [];
  let assistantText = "";

  for (const item of Array.isArray(turn?.items) ? turn.items : []) {
    if (!item || typeof item !== "object" || item.type === "userMessage") {
      continue;
    }

    if (item.type === "agentMessage") {
      const text = typeof item.text === "string" ? item.text : "";
      assistantText += text;
      receiveMessages.push({
        type: RuntimeMessageType.ASSISTANT,
        chunk: { text },
      });
      continue;
    }

    if (item.type === "plan") {
      receiveMessages.push({
        type: RuntimeMessageType.PLAN,
        entries: [
          {
            content: typeof item.text === "string" ? item.text : "",
            status: "completed",
          },
        ],
        explanation: "",
      });
      continue;
    }

    const toolCall = normalizeToolCallItem(item, "completed");
    if (toolCall) {
      receiveMessages.push(toolCall);
    }
  }

  if (receiveMessages.length === 0) {
    return null;
  }

  receiveMessages.push({
    type: RuntimeMessageType.TASK_FINISH,
    stopReason: turn?.status === "interrupted" ? "interrupted" : turn?.status || "end_turn",
  });

  return {
    kind: runtimeMessageKind,
    createdAt: createSyntheticCreatedAt(thread, turnIndex, 900),
    assistantText,
    raw: {
      receiveMessages,
    },
  };
}

export function convertThreadToRuntimeHistory(client, thread, runtimeMessageKind) {
  const history = [];

  const turns = Array.isArray(thread?.turns) ? thread.turns : [];
  turns.forEach((turn, turnIndex) => {
    const items = Array.isArray(turn?.items) ? turn.items : [];
    items
      .filter((item) => item?.type === "userMessage")
      .forEach((item, itemIndex) => {
        const contentItems = Array.isArray(item?.content) ? item.content : [];
        const text = contentItems.map((contentItem) => extractTextFromUserInput(contentItem)).filter(Boolean).join("\n");
        const images = contentItems.map((contentItem) => extractImageFromUserInput(contentItem)).filter(Boolean);
        history.push({
          kind: "user",
          createdAt: createSyntheticCreatedAt(thread, turnIndex, itemIndex),
          raw: {
            type: "user",
            text,
            images,
          },
        });
      });

    const runtimeMessage = buildRuntimeMessageFromThreadItems(thread, turn, turnIndex, runtimeMessageKind);
    if (runtimeMessage) {
      history.push(runtimeMessage);
    }

    if (turn?.status === "interrupted") {
      history.push({
        kind: "system",
        createdAt: createSyntheticCreatedAt(thread, turnIndex, 999),
        raw: {
          type: "system",
          text: "interrupt_triggered",
        },
      });
    }
  });

  return history;
}
