---
module: services.g3proxy
option_count: 3
source: options.html
---

# services.g3proxy

## services.g3proxy.enable

Whether to enable g3proxy, a generic purpose forward proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/g3proxy.nix>

## services.g3proxy.package

The g3proxy package to use. Type: package Default: pkgs.g3proxy Declared by: <nixpkgs/nixos/modules/services/networking/g3proxy.nix>

## services.g3proxy.settings

Settings of g3proxy. Type: YAML 1.1 value Default: { } Example: { server = [{ name = "test"; escaper = "default"; type = "socks_proxy"; listen = { address = "[::]:10086"; }; }]; } Declared by: <nixpkgs/nixos/modules/services/networking/g3proxy.nix>
