---
module: services.btrbk.sshAccess.*
option_count: 2
source: options.html
---

# services.btrbk.sshAccess.*

## services.btrbk.sshAccess.*.key

SSH public key allowed to login as user btrbk to run remote backups. Type: string Declared by: <nixpkgs/nixos/modules/services/backup/btrbk.nix>

## services.btrbk.sshAccess.*.roles

What actions can be performed with this SSH key. See ssh_filter_btrbk(1) for details Type: list of (one of “info”, “source”, “target”, “delete”, “snapshot”, “send”, “receive”) Example: [ "source" "info" "send" ] Declared by: <nixpkgs/nixos/modules/services/backup/btrbk.nix>
