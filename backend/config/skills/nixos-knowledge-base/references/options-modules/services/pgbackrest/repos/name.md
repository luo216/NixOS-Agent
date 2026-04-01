---
module: services.pgbackrest.repos.<name>
option_count: 3
source: options.html
---

# services.pgbackrest.repos.<name>

## services.pgbackrest.repos.<name>.host

Repository host when operating remotely Type: null or string Default: name Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>

## services.pgbackrest.repos.<name>.sftp-host

SFTP repository host Type: null or string Default: name Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>

## services.pgbackrest.repos.<name>.sftp-private-key-file

SFTP private key file. The file must be accessible by both the pgbackrest and the postgres users. Type: null or absolute path not in the Nix store Default: null Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>
