---
module: services.easytier
option_count: 4
source: options.html
---

# services.easytier

## services.easytier.enable

Whether to enable EasyTier daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.package

The easytier package to use. Type: package Default: pkgs.easytier Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.allowSystemForward

Whether to enable Allow the system to forward packets from easytier. Useful when proxy_forward_by_system enabled. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances

EasyTier instances. Type: attribute set of (submodule) Default: { } Example: { extraSettings = { flags = { dev_name = "tun1"; }; }; settings = { ipv4 = "10.144.144.1/24"; network_name = "easytier"; network_secret = "easytier"; peers = [ "tcp://public.easytier.cn:11010" "wss://example.com:443" ]; }; } Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>
