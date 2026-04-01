---
module: services.firebird
option_count: 5
source: options.html
---

# services.firebird

## services.firebird.enable

Whether to enable the Firebird super server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/firebird.nix>

## services.firebird.package

The firebird package to use. For SuperServer use override: pkgs.firebird_3.override { superServer = true; }; Type: package Default: pkgs.firebird Example: firebird_3 Declared by: <nixpkgs/nixos/modules/services/databases/firebird.nix>

## services.firebird.baseDir

Location containing data/ and system/ directories. data/ stores the databases, system/ stores the password database security2.fdb. Type: string Default: "/var/lib/firebird" Declared by: <nixpkgs/nixos/modules/services/databases/firebird.nix>

## services.firebird.port

Port Firebird uses. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3050 Declared by: <nixpkgs/nixos/modules/services/databases/firebird.nix>

## services.firebird.user

User account under which firebird runs. Type: string Default: "firebird" Declared by: <nixpkgs/nixos/modules/services/databases/firebird.nix>
