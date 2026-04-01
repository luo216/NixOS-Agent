---
module: systemd.user.tmpfiles.users.<name>
option_count: 1
source: options.html
---

# systemd.user.tmpfiles.users.<name>

## systemd.user.tmpfiles.users.<name>.rules

Per-user rules for creation, deletion and cleaning of volatile and temporary files automatically. See tmpfiles.d(5) for the exact format. Type: list of string Default: [ ] Example: [ "D %C - - - 7d" ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/user.nix>
