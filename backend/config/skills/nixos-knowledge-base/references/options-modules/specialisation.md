---
module: specialisation
option_count: 1
source: options.html
---

# specialisation

## specialisation

Additional configurations to build. If inheritParentConfig is true, the system will be based on the overall system configuration. To switch to a specialised configuration (e.g. fewJobsManyCores) at runtime, run: sudo /run/current-system/specialisation/fewJobsManyCores/bin/switch-to-configuration test Type: attribute set of (submodule) Default: { } Example: { fewJobsManyCores.configuration = { nix.settings = { core = 0; max-jobs = 1; }; }; } Declared by: <nixpkgs/nixos/modules/system/activation/specialisation.nix>
