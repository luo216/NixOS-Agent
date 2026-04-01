---
module: boot.initrd.systemd.dmVerity
option_count: 1
source: options.html
---

# boot.initrd.systemd.dmVerity

## boot.initrd.systemd.dmVerity.enable

Mount verity-protected block devices in the initrd. Enabling this option allows to use systemd-veritysetup and systemd-veritysetup-generator in the initrd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/dm-verity.nix>
