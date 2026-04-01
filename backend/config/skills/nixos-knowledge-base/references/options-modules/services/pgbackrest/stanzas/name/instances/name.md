---
module: services.pgbackrest.stanzas.<name>.instances.<name>
option_count: 1
source: options.html
---

# services.pgbackrest.stanzas.<name>.instances.<name>

## services.pgbackrest.stanzas.<name>.instances.<name>.host

PostgreSQL host for operating remotely. Type: null or string Default: if name == "localhost" then null else name Declared by: <nixpkgs/nixos/modules/services/backup/pgbackrest.nix>
