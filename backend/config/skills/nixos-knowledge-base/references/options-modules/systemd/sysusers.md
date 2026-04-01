---
module: systemd.sysusers
option_count: 1
source: options.html
---

# systemd.sysusers

## systemd.sysusers.enable

If enabled, users are created with systemd-sysusers instead of with the custom update-users-groups.pl script. Note: This is experimental. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/sysusers.nix>
