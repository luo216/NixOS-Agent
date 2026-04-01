---
module: services.part-db.settings
option_count: 1
source: options.html
---

# services.part-db.settings

## services.part-db.settings.DATABASE_URL

The postgresql database server to connect to. Defauls to local postgresql unix socket Type: string Default: "postgresql://part-db@localhost/part-db?serverVersion=\${config.services.postgresql.package.version}&host=/run/postgresql" Declared by: <nixpkgs/nixos/modules/services/web-apps/part-db.nix>
