---
module: services.typesense.settings.server
option_count: 3
source: options.html
---

# services.typesense.settings.server

## services.typesense.settings.server.api-address

Address to which Typesense API service binds. Type: string Declared by: <nixpkgs/nixos/modules/services/search/typesense.nix>

## services.typesense.settings.server.api-port

Port on which the Typesense API service listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8108 Declared by: <nixpkgs/nixos/modules/services/search/typesense.nix>

## services.typesense.settings.server.data-dir

Path to the directory where data will be stored on disk. Type: string Default: "/var/lib/typesense" Declared by: <nixpkgs/nixos/modules/services/search/typesense.nix>
