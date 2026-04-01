---
module: services.akkoma.dist
option_count: 6
source: options.html
---

# services.akkoma.dist

## services.akkoma.dist.address

Listen address for Erlang distribution protocol and Port Mapper Daemon (epmd). Type: IPv4 or IPv6 address Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.dist.cookie

Erlang release cookie. If set to null, a temporary random cookie will be generated. Type: null or secret value Default: null Example: { _secret = "/var/lib/secrets/akkoma/releaseCookie"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.dist.epmdPort

TCP port to bind Erlang Port Mapper Daemon to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4369 Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.dist.extraFlags

Extra flags to pass to Erlang Type: list of string Default: [ ] Example: [ "+sbwt" "none" "+sbwtdcpu" "none" "+sbwtdio" "none" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.dist.portMax

Upper bound for Erlang distribution protocol TCP port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 65535 Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>

## services.akkoma.dist.portMin

Lower bound for Erlang distribution protocol TCP port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 49152 Declared by: <nixpkgs/nixos/modules/services/web-apps/akkoma.nix>
