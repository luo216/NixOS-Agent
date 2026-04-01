---
module: services.skydns
option_count: 6
source: options.html
---

# services.skydns

## services.skydns.enable

Whether to enable skydns service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/skydns.nix>

## services.skydns.package

The skydns package to use. Type: package Default: pkgs.skydns Declared by: <nixpkgs/nixos/modules/services/networking/skydns.nix>

## services.skydns.address

Skydns address to bind to. Type: string Default: "0.0.0.0:53" Declared by: <nixpkgs/nixos/modules/services/networking/skydns.nix>

## services.skydns.domain

Skydns default domain if not specified by etcd config. Type: string Default: "skydns.local." Declared by: <nixpkgs/nixos/modules/services/networking/skydns.nix>

## services.skydns.extraConfig

Skydns attribute set of extra config options passed as environment variables. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/skydns.nix>

## services.skydns.nameservers

Skydns list of nameservers to forward DNS requests to when not authoritative for a domain. Type: list of string Default: map (n: n + ":53") config.networking.nameservers Example: [ "8.8.8.8:53" "8.8.4.4:53" ] Declared by: <nixpkgs/nixos/modules/services/networking/skydns.nix>
