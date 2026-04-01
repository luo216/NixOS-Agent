#!/usr/bin/env bash

set -euo pipefail

from_client_id="${1:-}"
shift || true

API_BASE="${CODEX_AGENT_API_BASE:-http://localhost:8787}"
POLL_INTERVAL_SECONDS="${ACTIVATE_POLL_INTERVAL_SECONDS:-2}"
MAX_WAIT_SECONDS="${ACTIVATE_MAX_WAIT_SECONDS:-600}"
TARGET_CLIENT_ID="implementer"
default_message="请根据最新确认的规划继续推进实现，先从当前依赖已满足且优先级最高的 feature 开始。"
message="${*:-$default_message}"

if [[ -z "$from_client_id" ]]; then
  echo "usage: activate-implementer.sh <from-client-id> [message]" >&2
  exit 1
fi

wait_for_target_ready() {
  local start_ts now_ts clients_json pending_json ready
  start_ts="$(date +%s)"
  while true; do
    clients_json="$(curl -fsS "$API_BASE/api/clients")"
    pending_json="$(curl -fsS "$API_BASE/api/activations/pending")"
    ready="$(python3 -c '
import json, sys
clients = json.loads(sys.argv[1]).get("items", [])
pending = json.loads(sys.argv[2]).get("items", [])
target = sys.argv[3]
busy = {"running", "connecting", "interrupting"}
status = next((item.get("status", "") for item in clients if item.get("id") == target), "")
has_pending = any(item.get("toClientId") == target for item in pending)
print("1" if status and status not in busy and not has_pending else "0")
' "$clients_json" "$pending_json" "$TARGET_CLIENT_ID")"
    if [[ "$ready" == "1" ]]; then
      return 0
    fi
    now_ts="$(date +%s)"
    if (( now_ts - start_ts >= MAX_WAIT_SECONDS )); then
      echo "timeout waiting for $TARGET_CLIENT_ID to become idle" >&2
      exit 1
    fi
    sleep "$POLL_INTERVAL_SECONDS"
  done
}

wait_for_target_ready

payload="$(python3 -c 'import json, sys; print(json.dumps({"fromClientId": sys.argv[1], "message": sys.argv[2]}))' "$from_client_id" "$message")"

curl -X POST "$API_BASE/api/clients/$TARGET_CLIENT_ID/activate-client" \
  -H 'Content-Type: application/json' \
  -d "$payload"
