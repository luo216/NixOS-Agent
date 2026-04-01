---
module: services.kresd
option_count: 7
source: options.html
---

# services.kresd

## services.kresd.enable

Whether to enable knot-resolver (version 5) domain name server. DNSSEC validation is turned on by default. You can run kresd-cli 1 and give commands interactively to kresd@1.service. If you want to user knot-resolver 6, please use services.knot-resolver. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/kresd.nix>

## services.kresd.package

The knot-resolver_5 package to use. Type: package Default: pkgs.knot-resolver_5 Example: knot-resolver_5.override { extraFeatures = true; } Declared by: <nixpkgs/nixos/modules/services/networking/kresd.nix>

## services.kresd.extraConfig

Extra lines to be added verbatim to the generated configuration file. See upstream documentation https://www.knot-resolver.cz/documentation/stable/config-overview.html for more details. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/kresd.nix>

## services.kresd.instances

The number of instances to start. They will be called kresd@{1,2,…}.service. Knot Resolver uses no threads, so this is the way to scale. You can dynamically start/stop them at will, so this is just system default. Type: unsigned integer, meaning >=0 Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/kresd.nix>

## services.kresd.listenDoH

Addresses and ports on which kresd should provide DNS over HTTPS/2 (see RFC 8484). For detailed syntax see ListenStream in systemd.socket(5). Type: list of string Default: [ ] Example: [ "198.51.100.1:443" "[2001:db8::1]:443" "443" ] Declared by: <nixpkgs/nixos/modules/services/networking/kresd.nix>

## services.kresd.listenPlain

What addresses and ports the server should listen on. For detailed syntax see ListenStream in systemd.socket(5). Type: list of string Default: [ "[::1]:53" "127.0.0.1:53" ] Example: [ "53" ] Declared by: <nixpkgs/nixos/modules/services/networking/kresd.nix>

## services.kresd.listenTLS

Addresses and ports on which kresd should provide DNS over TLS (see RFC 7858). For detailed syntax see ListenStream in systemd.socket(5). Type: list of string Default: [ ] Example: [ "198.51.100.1:853" "[2001:db8::1]:853" "853" ] Declared by: <nixpkgs/nixos/modules/services/networking/kresd.nix>
