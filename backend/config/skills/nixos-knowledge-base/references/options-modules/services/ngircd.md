---
module: services.ngircd
option_count: 3
source: options.html
---

# services.ngircd

## services.ngircd.enable

Whether to enable the ngircd IRC server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ngircd.nix>

## services.ngircd.package

The ngircd package to use. Type: package Default: pkgs.ngircd Declared by: <nixpkgs/nixos/modules/services/networking/ngircd.nix>

## services.ngircd.config

The ngircd configuration (see ngircd.conf(5)). Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/networking/ngircd.nix>
