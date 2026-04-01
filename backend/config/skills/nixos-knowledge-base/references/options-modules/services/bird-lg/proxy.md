---
module: services.bird-lg.proxy
option_count: 5
source: options.html
---

# services.bird-lg.proxy

## services.bird-lg.proxy.enable

Whether to enable Bird Looking Glass Proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.proxy.allowedIPs

List of IPs or networks to allow (default all allowed). Type: list of string Default: [ ] Example: [ "192.168.25.52" "192.168.25.53" "192.168.0.0/24" ] Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.proxy.birdSocket

Bird control socket path. Type: string Default: "/var/run/bird/bird.ctl" Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.proxy.extraArgs

Extra parameters documented here. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.proxy.listenAddresses

Address to listen on. Type: string or list of string Default: "127.0.0.1:8000" Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>
