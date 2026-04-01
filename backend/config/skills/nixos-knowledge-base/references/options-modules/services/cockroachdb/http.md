---
module: services.cockroachdb.http
option_count: 2
source: options.html
---

# services.cockroachdb.http

## services.cockroachdb.http.address

Address to bind to for http-based Admin UI Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.http.port

Port to bind to for http-based Admin UI Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>
