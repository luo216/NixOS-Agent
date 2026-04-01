---
module: systemd.user.tmpfiles
option_count: 3
source: options.html
---

# systemd.user.tmpfiles

## systemd.user.tmpfiles.enable

Whether to enable systemd user units systemd-tmpfiles-setup.service and systemd-tmpfiles-clean.timer. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>

## systemd.user.tmpfiles.rules

Global user rules for creation, deletion and cleaning of volatile and temporary files automatically. See tmpfiles.d(5) for the exact format. Type: list of string Default: [ ] Example: [ "D %C - - - 7d" ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>

## systemd.user.tmpfiles.users

Per-user rules for creation, deletion and cleaning of volatile and temporary files automatically. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>
