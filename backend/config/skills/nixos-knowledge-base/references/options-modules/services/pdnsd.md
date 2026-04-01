---
module: services.pdnsd
option_count: 5
source: options.html
---

# services.pdnsd

## services.pdnsd.enable

Whether to enable pdnsd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/pdnsd.nix>

## services.pdnsd.cacheDir

Directory holding the pdnsd cache Type: string Default: "/var/cache/pdnsd" Declared by: <nixpkgs/nixos/modules/services/networking/pdnsd.nix>

## services.pdnsd.extraConfig

Extra configuration directives that should be added to pdnsd.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/pdnsd.nix>

## services.pdnsd.globalConfig

Global configuration that should be added to the global directory of pdnsd.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/pdnsd.nix>

## services.pdnsd.serverConfig

Server configuration that should be added to the server directory of pdnsd.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/pdnsd.nix>
