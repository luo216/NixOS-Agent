---
module: services.lemmy.database
option_count: 3
source: options.html
---

# services.lemmy.database

## services.lemmy.database.createLocally

Whether to enable creation of database on the instance. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>

## services.lemmy.database.uri

The connection URI to use. Takes priority over the configuration file if set. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>

## services.lemmy.database.uriFile

File which contains the database uri. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/lemmy.nix>
