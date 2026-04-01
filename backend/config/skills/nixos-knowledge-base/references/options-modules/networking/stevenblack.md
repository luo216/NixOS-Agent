---
module: networking.stevenblack
option_count: 4
source: options.html
---

# networking.stevenblack

## networking.stevenblack.enable

Whether to enable the stevenblack hosts file blocklist. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/stevenblack.nix>

## networking.stevenblack.package

The stevenblack-blocklist package to use. Type: package Default: pkgs.stevenblack-blocklist Declared by: <nixpkgs/nixos/modules/config/stevenblack.nix>

## networking.stevenblack.block

Additional blocklist extensions. Type: list of (one of “fakenews”, “gambling”, “porn”, “social”) Default: [ ] Declared by: <nixpkgs/nixos/modules/config/stevenblack.nix>

## networking.stevenblack.whitelist

Domains to exclude from blocking. Type: list of string matching the pattern ^[a-zA-Z0-9_-]+([.][a-zA-Z0-9_-]+)+$ Default: [ ] Example: [ "s.click.aliexpress.com" ] Declared by: <nixpkgs/nixos/modules/config/stevenblack.nix>
