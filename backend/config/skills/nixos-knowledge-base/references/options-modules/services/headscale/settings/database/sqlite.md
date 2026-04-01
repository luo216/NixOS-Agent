---
module: services.headscale.settings.database.sqlite
option_count: 2
source: options.html
---

# services.headscale.settings.database.sqlite

## services.headscale.settings.database.sqlite.path

Path to the sqlite3 database file. Type: null or string Default: "/var/lib/headscale/db.sqlite" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.database.sqlite.write_ahead_log

Enable WAL mode for SQLite. This is recommended for production environments. https://www.sqlite.org/wal.html Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>
