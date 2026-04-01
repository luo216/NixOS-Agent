---
module: services.dictd
option_count: 2
source: options.html
---

# services.dictd

## services.dictd.enable

Whether to enable the DICT.org dictionary server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/dictd.nix>

## services.dictd.DBs

List of databases to make available. Type: list of package Default: with pkgs.dictdDBs; [ wiktionary wordnet ] Example: [ pkgs.dictdDBs.nld2eng ] Declared by: <nixpkgs/nixos/modules/services/misc/dictd.nix>
