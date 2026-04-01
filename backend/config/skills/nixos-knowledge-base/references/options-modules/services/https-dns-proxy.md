---
module: services.https-dns-proxy
option_count: 5
source: options.html
---

# services.https-dns-proxy

## services.https-dns-proxy.enable

Whether to enable https-dns-proxy daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/https-dns-proxy.nix>

## services.https-dns-proxy.address

The address on which to listen Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/https-dns-proxy.nix>

## services.https-dns-proxy.extraArgs

Additional arguments to pass to the process. Type: list of string Default: [ "-v" ] Declared by: <nixpkgs/nixos/modules/services/networking/https-dns-proxy.nix>

## services.https-dns-proxy.port

The port on which to listen Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5053 Declared by: <nixpkgs/nixos/modules/services/networking/https-dns-proxy.nix>

## services.https-dns-proxy.preferIPv4

https_dns_proxy will by default use IPv6 and fail if it is not available. To play it safe, we choose IPv4. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/https-dns-proxy.nix>
