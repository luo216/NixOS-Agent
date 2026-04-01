---
module: programs.nix-required-mounts.presets.nvidia-gpu
option_count: 1
source: options.html
---

# programs.nix-required-mounts.presets.nvidia-gpu

## programs.nix-required-mounts.presets.nvidia-gpu.enable

Whether to enable Declare the support for derivations that require an Nvidia GPU to be available, e.g. derivations with requiredSystemFeatures = [ "cuda" ]. This mounts the corresponding userspace drivers and device nodes in the sandbox, but only for derivations that request these special features. You may extend or override the exposed paths via the programs.nix-required-mounts.allowedPatterns.nvidia-gpu.paths option. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/nix-required-mounts.nix>
