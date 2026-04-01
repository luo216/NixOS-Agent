---
name: codex-operations-manual
description: Entry skill for `.codex` collaboration. Read the role-specific manual for your current client.
---

# Codex Operations Manual

## File Tree

```text
.
|-- SKILL.md
|-- references/
|   |-- planner/
|   |-- implementer/
|   `-- worker/
`-- scripts/
    |-- activate-implementer.sh
    `-- activate-worker.sh
```

Use this skill as the entry point, then read only the manual for your current client:

- `planner` -> `references/planner/manual.md`
- `implementer` -> `references/implementer/manual.md`
- `worker` -> `references/worker/manual.md`

Working rule:

- This directory is the source asset in the service repository.
- Runtime handoff commands still target the workspace-synced mirror under `.codex/skills/codex-operations-manual/`.
- Keep the system prompt short.
- Use the role manual as the detailed procedure source.
- Load extra detail only when the current step needs it; do not preload every reference by default.
