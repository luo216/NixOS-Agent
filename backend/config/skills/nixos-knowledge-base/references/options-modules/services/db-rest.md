---
module: services.db-rest
option_count: 6
source: options.html
---

# services.db-rest

## services.db-rest.enable

Whether to enable db-rest service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>

## services.db-rest.package

The db-rest package to use. Type: package Default: pkgs.db-rest Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>

## services.db-rest.group

Group under which db-rest runs. Type: string Default: "db-rest" Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>

## services.db-rest.host

The host address the db-rest server should listen on. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>

## services.db-rest.port

The port the db-rest server should listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>

## services.db-rest.user

User account under which db-rest runs. Type: string Default: "db-rest" Declared by: <nixpkgs/nixos/modules/services/misc/db-rest.nix>
