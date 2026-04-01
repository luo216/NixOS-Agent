---
module: services.wstunnel
option_count: 3
source: options.html
---

# services.wstunnel

## services.wstunnel.enable

Whether to enable wstunnel. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>

## services.wstunnel.clients

wstunnel clients to set up. Type: attribute set of (submodule) Default: { } Example: { wg-tunnel = { connectTo = "wss://wstunnel.server.com:8443"; localToRemote = [ "tcp://1212:google.com:443" "tcp://2:n.lan:4?proxy_protocol" ]; remoteToLocal = [ "socks5://[::1]:1212" "unix://wstunnel.sock:g.com:443" ]; }; } Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>

## services.wstunnel.servers

wstunnel servers to set up. Type: attribute set of (submodule) Default: { } Example: { wg-tunnel = { listen = { enableHTTPS = true; host = "0.0.0.0"; port = 8080; }; settings = { restrict-to = [ { host = "127.0.0.1"; port = 51820; } ]; tls-certificate = "/var/lib/secrets/fullchain.pem"; tls-private-key = "/var/lib/secrets/key.pem"; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>
