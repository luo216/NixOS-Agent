---
module: services.lvm
option_count: 1
source: options.html
---

# services.lvm

## services.lvm.enable

Whether to enable lvm2. Note The lvm2 package contains device-mapper udev rules and without those tools like cryptsetup do not fully function! Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/tasks/lvm.nix>
