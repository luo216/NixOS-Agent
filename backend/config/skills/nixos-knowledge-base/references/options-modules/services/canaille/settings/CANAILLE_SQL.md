---
module: services.canaille.settings.CANAILLE_SQL
option_count: 1
source: options.html
---

# services.canaille.settings.CANAILLE_SQL

## services.canaille.settings.CANAILLE_SQL.DATABASE_URI

The SQL server URI. Will configure a local PostgreSQL db if left to default. Please note that the NixOS module only really supports PostgreSQL for now. Change at your own risk! Type: string Default: "postgresql://localhost/canaille?host=/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/security/canaille.nix>
