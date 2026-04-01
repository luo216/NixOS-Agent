---
module: services.pgbackrest.stanzas.<name>.jobs.<name>
option_count: 2
source: options.html
---

# services.pgbackrest.stanzas.<name>.jobs.<name>

## services.pgbackrest.stanzas.<name>.jobs.<name>.schedule

When or how often the backup should run. Must be in the format described in systemd.time(7). Type: string Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>

## services.pgbackrest.stanzas.<name>.jobs.<name>.type

Backup type as described in: https://pgbackrest.org/command.html#command-backup/category-command/option-type Type: string Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>
