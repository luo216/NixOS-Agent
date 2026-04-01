---
module: boot.initrd.services.lvm
option_count: 1
source: options.html
---

# boot.initrd.services.lvm

## boot.initrd.services.lvm.enable

This will only be used when systemd is used in stage 1. Whether to enable booting from LVM2 in the initrd. Type: boolean Default: config.boot.initrd.systemd.enable && config.services.lvm.enable Example: true Declared by: <nixpkgs/nixos/modules/tasks/lvm.nix>
