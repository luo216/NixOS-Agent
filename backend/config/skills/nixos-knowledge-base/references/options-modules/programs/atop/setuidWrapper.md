---
module: programs.atop.setuidWrapper
option_count: 1
source: options.html
---

# programs.atop.setuidWrapper

## programs.atop.setuidWrapper.enable

Whether to install a setuid wrapper for Atop. This is required to use some of the features as non-root user (e.g.: ipc information, netatop, atopgpu). Atop tries to drop the root privileges shortly after starting. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/programs/atop.nix>
