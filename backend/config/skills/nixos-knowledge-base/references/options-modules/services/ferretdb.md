---
module: services.ferretdb
option_count: 3
source: options.html
---

# services.ferretdb

## services.ferretdb.enable

Whether to enable FerretDB, an Open Source MongoDB alternative. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/ferretdb.nix>

## services.ferretdb.package

The ferretdb package to use. Type: package Default: pkgs.ferretdb Declared by: <nixpkgs/nixos/modules/services/databases/ferretdb.nix>

## services.ferretdb.settings

Additional configuration for FerretDB, see https://docs.ferretdb.io/configuration/flags/ for supported values. Type: open submodule of attribute set of string Example: { FERRETDB_LOG_LEVEL = "warn"; FERRETDB_MODE = "normal"; } Declared by: <nixpkgs/nixos/modules/services/databases/ferretdb.nix>
