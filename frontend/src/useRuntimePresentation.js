import { useMemo } from "react";
import {
  applyMessageOverrides,
  buildRuntimeMessages,
  findLatestCompletedToolCallFingerprint,
} from "./runtimeMessageUtils.js";

export function useRuntimePresentation({ activeClientId, runtimeByClient, messageOverridesByClient }) {
  const activeRuntime = useMemo(
    () => (activeClientId ? runtimeByClient[activeClientId] || null : null),
    [runtimeByClient, activeClientId]
  );

  const displayMessages = useMemo(
    () => applyMessageOverrides(buildRuntimeMessages(activeRuntime), messageOverridesByClient[activeClientId] || {}),
    [activeRuntime, messageOverridesByClient, activeClientId]
  );

  const latestCompletedToolCallFingerprint = useMemo(
    () => findLatestCompletedToolCallFingerprint(displayMessages),
    [displayMessages]
  );

  return {
    activeRuntime,
    displayMessages,
    latestCompletedToolCallFingerprint,
  };
}
