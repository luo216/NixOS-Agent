---
module: services.v2ray
option_count: 4
source: options.html
---

# services.v2ray

## services.v2ray.enable

Whether to run v2ray server. Either configFile or config must be specified. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/v2ray.nix>

## services.v2ray.package

The v2ray package to use. Type: package Default: pkgs.v2ray Declared by: <nixpkgs/nixos/modules/services/networking/v2ray.nix>

## services.v2ray.config

The configuration object. Either configFile or config must be specified. See https://www.v2fly.org/en_US/v5/config/overview.html. Type: null or JSON value Default: null Example: { inbounds = [ { listen = "127.0.0.1"; port = 1080; protocol = "http"; } ]; outbounds = [ { protocol = "freedom"; } ]; } Declared by: <nixpkgs/nixos/modules/services/networking/v2ray.nix>

## services.v2ray.configFile

The absolute path to the configuration file. Either configFile or config must be specified. See https://www.v2fly.org/en_US/v5/config/overview.html. Type: null or string Default: null Example: "/etc/v2ray/config.json" Declared by: <nixpkgs/nixos/modules/services/networking/v2ray.nix>
