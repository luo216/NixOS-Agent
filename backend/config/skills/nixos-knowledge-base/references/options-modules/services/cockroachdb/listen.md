---
module: services.cockroachdb.listen
option_count: 2
source: options.html
---

# services.cockroachdb.listen

## services.cockroachdb.listen.address

Address to bind to for intra-cluster communication Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>

## services.cockroachdb.listen.port

Port to bind to for intra-cluster communication Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 26257 Declared by: <nixpkgs/nixos/modules/services/databases/cockroachdb.nix>
