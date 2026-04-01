---
module: boot.initrd.systemd.groups.<name>
option_count: 1
source: options.html
---

# boot.initrd.systemd.groups.<name>

## boot.initrd.systemd.groups.<name>.gid

ID of the group in initrd. Type: signed integer Default: config.users.groups.${name}.gid Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>
