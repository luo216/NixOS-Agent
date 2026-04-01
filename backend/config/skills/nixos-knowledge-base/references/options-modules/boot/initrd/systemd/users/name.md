---
module: boot.initrd.systemd.users.<name>
option_count: 3
source: options.html
---

# boot.initrd.systemd.users.<name>

## boot.initrd.systemd.users.<name>.group

Group the user belongs to in initrd. Type: (optionally newline-terminated) single-line string Default: config.users.users.${name}.group Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## boot.initrd.systemd.users.<name>.shell

The path to the user’s shell in initrd. Type: absolute path, not containing newlines or colons Default: ${pkgs.shadow}/bin/nologin Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>

## boot.initrd.systemd.users.<name>.uid

ID of the user in initrd. Type: signed integer Default: config.users.users.${name}.uid Declared by: <nixpkgs/nixos/modules/config/users-groups.nix>
