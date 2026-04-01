---
module: services.nginx.defaultListen.*
option_count: 5
source: options.html
---

# services.nginx.defaultListen.*

## services.nginx.defaultListen.*.addr

IP address. Type: string Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.defaultListen.*.extraParameters

Extra parameters of this listen directive. Type: list of string Default: [ ] Example: [ "backlog=1024" "deferred" ] Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.defaultListen.*.port

Port number. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.defaultListen.*.proxyProtocol

Enable PROXY protocol. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.defaultListen.*.ssl

Enable SSL. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>
