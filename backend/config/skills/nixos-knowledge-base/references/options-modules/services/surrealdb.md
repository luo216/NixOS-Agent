---
module: services.surrealdb
option_count: 6
source: options.html
---

# services.surrealdb

## services.surrealdb.enable

Whether to enable SurrealDB, a scalable, distributed, collaborative, document-graph database, for the realtime web. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/surrealdb.nix>

## services.surrealdb.package

The surrealdb package to use. Type: package Default: pkgs.surrealdb Declared by: <nixpkgs/nixos/modules/services/databases/surrealdb.nix>

## services.surrealdb.dbPath

The path that surrealdb will write data to. Use null for in-memory. Can be one of “memory”, “rocksdb://:path”, “surrealkv://:path”, “tikv://:addr”, “fdb://:addr”. Type: string Default: "rocksdb:///var/lib/surrealdb/" Example: "memory" Declared by: <nixpkgs/nixos/modules/services/databases/surrealdb.nix>

## services.surrealdb.extraFlags

Specify a list of additional command line flags. Type: list of string Default: [ ] Example: [ "--allow-all" "--user" "root" "--pass" "root" ] Declared by: <nixpkgs/nixos/modules/services/databases/surrealdb.nix>

## services.surrealdb.host

The host that surrealdb will connect to. Type: string Default: "127.0.0.1" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/databases/surrealdb.nix>

## services.surrealdb.port

The port that surrealdb will connect to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Example: 8000 Declared by: <nixpkgs/nixos/modules/services/databases/surrealdb.nix>
