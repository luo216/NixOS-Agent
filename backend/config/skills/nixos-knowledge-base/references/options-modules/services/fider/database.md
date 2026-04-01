---
module: services.fider.database
option_count: 1
source: options.html
---

# services.fider.database

## services.fider.database.url

URI to use for the main PostgreSQL database. If this needs to include credentials that shouldn’t be world-readable in the Nix store, set an environment file on the systemd service and override the DATABASE_URL entry. Pass the string local to setup a database on the local server. Type: string Default: "local" Declared by: <nixpkgs/nixos/modules/services/web-apps/fider.nix>
