---
module: services.monica.nginx.listen.*
option_count: 5
source: options.html
---

# services.monica.nginx.listen.*

## services.monica.nginx.listen.*.addr

Listen address. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.nginx.listen.*.extraParameters

Extra parameters of this listen directive. Type: list of string Default: [ ] Example: [ "backlog=1024" "deferred" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.nginx.listen.*.port

Port number to listen on. If unset and the listen address is not a socket then nginx defaults to 80. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.nginx.listen.*.proxyProtocol

Enable PROXY protocol. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.nginx.listen.*.ssl

Enable SSL. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>
