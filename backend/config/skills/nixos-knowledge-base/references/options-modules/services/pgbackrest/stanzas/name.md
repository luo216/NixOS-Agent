---
module: services.pgbackrest.stanzas.<name>
option_count: 3
source: options.html
---

# services.pgbackrest.stanzas.<name>

## services.pgbackrest.stanzas.<name>.instances

An attribute set of database instances as described in: https://pgbackrest.org/configuration.html#section-stanza Each instance defaults to set pg-host to the attribute’s name. The special value “localhost” will unset pg-host. Note The prefix pgNNN- is added automatically. Example: Use user instead of pg1-user. Type: attribute set of (open submodule of attribute set of (boolean or (unsigned integer, meaning >=0) or string or attribute set of string or list of string)) Default: { } Example: { localhost.database = "app"; "postgres.example.com".port = "5433"; } Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>

## services.pgbackrest.stanzas.<name>.jobs

Backups jobs to schedule for this stanza as described in: https://pgbackrest.org/user-guide.html#quickstart/schedule-backup Type: attribute set of (submodule) Default: { } Example: { weekly = { schedule = "Sun, 6:30"; type = "full"; }; daily = { schedule = "Mon..Sat, 6:30"; type = "diff"; }; } Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>

## services.pgbackrest.stanzas.<name>.settings

An attribute set of options as described in: https://pgbackrest.org/configuration.html All options can be used. Repository options should be set via repos instead. Stanza options should be set via instances instead. Type: open submodule of attribute set of (boolean or (unsigned integer, meaning >=0) or string or attribute set of string or list of string) Default: { } Example: { process-max = 2; } Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>
