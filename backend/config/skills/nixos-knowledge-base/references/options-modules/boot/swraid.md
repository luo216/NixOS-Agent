---
module: boot.swraid
option_count: 2
source: options.html
---

# boot.swraid

## boot.swraid.enable

Whether to enable support for Linux MD RAID arrays. When this is enabled, mdadm will be added to the system path, and MD RAID arrays will be detected and activated automatically, both in stage-1 (initramfs) and in stage-2 (the final NixOS system). This should be enabled if you want to be able to access and/or boot from MD RAID arrays. nixos-generate-config should detect it correctly in the standard installation procedure. Type: boolean Default: "`true` if stateVersion is older than 23.11" Example: true Declared by: <nixpkgs/nixos/modules/tasks/swraid.nix>

## boot.swraid.mdadmConf

Contents of /etc/mdadm.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/tasks/swraid.nix>
