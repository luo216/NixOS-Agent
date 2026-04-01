---
module: services.immich.machine-learning
option_count: 2
source: options.html
---

# services.immich.machine-learning

## services.immich.machine-learning.enable

Whether to enable immich’s machine-learning functionality to detect faces and search for objects. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.machine-learning.environment

Extra configuration environment variables. Refer to the documentation for options tagged with ‘machine-learning’. Type: open submodule of attribute set of string Default: { } Example: { MACHINE_LEARNING_MODEL_TTL = "600"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>
