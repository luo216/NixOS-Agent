---
module: services.plausible.database.postgres
option_count: 3
source: options.html
---

# services.plausible.database.postgres

## services.plausible.database.postgres.dbname

Name of the database to use. Type: string Default: "plausible" Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.database.postgres.setup

Whether to enable creating a postgresql instance. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.database.postgres.socket

Path to the UNIX domain-socket to communicate with postgres. Type: string Default: "/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>
