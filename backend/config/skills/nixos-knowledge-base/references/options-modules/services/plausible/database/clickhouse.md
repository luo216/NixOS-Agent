---
module: services.plausible.database.clickhouse
option_count: 2
source: options.html
---

# services.plausible.database.clickhouse

## services.plausible.database.clickhouse.setup

Whether to enable creating a clickhouse instance. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>

## services.plausible.database.clickhouse.url

The URL to be used to connect to clickhouse. Type: string Default: "http://localhost:8123/default" Declared by: <nixpkgs/nixos/modules/services/web-apps/plausible.nix>
