---
module: services.rethinkdb
option_count: 5
source: options.html
---

# services.rethinkdb

## services.rethinkdb.enable

Whether to enable RethinkDB server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/rethinkdb.nix>

## services.rethinkdb.dbpath

Location where RethinkDB stores its data, 1 data directory per instance. Type: unspecified value Default: "/var/db/rethinkdb" Declared by: <nixpkgs/nixos/modules/services/databases/rethinkdb.nix>

## services.rethinkdb.group

Group which rethinkdb user belongs to. Type: unspecified value Default: "rethinkdb" Declared by: <nixpkgs/nixos/modules/services/databases/rethinkdb.nix>

## services.rethinkdb.pidpath

Location where each instance’s pid file is located. Type: unspecified value Default: "/run/rethinkdb" Declared by: <nixpkgs/nixos/modules/services/databases/rethinkdb.nix>

## services.rethinkdb.user

User account under which RethinkDB runs. Type: unspecified value Default: "rethinkdb" Declared by: <nixpkgs/nixos/modules/services/databases/rethinkdb.nix>
