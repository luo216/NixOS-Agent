---
module: services.metabase.listen
option_count: 2
source: options.html
---

# services.metabase.listen

## services.metabase.listen.ip

IP address that Metabase should listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/metabase.nix>

## services.metabase.listen.port

Listen port for Metabase. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/misc/metabase.nix>
