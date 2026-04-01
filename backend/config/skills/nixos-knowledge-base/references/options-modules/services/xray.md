---
module: services.xray
option_count: 4
source: options.html
---

# services.xray

## services.xray.enable

Whether to run xray server. Either settingsFile or settings must be specified. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/xray.nix>

## services.xray.package

The xray package to use. Type: package Default: pkgs.xray Declared by: <nixpkgs/nixos/modules/services/networking/xray.nix>

## services.xray.settings

The configuration object. Either settingsFile or settings must be specified. See https://www.v2fly.org/en_US/config/overview.html. Type: null or (attribute set of unspecified value) Default: null Example: { inbounds = [ { listen = "127.0.0.1"; port = 1080; protocol = "http"; } ]; outbounds = [ { protocol = "freedom"; } ]; } Declared by: <nixpkgs/nixos/modules/services/networking/xray.nix>

## services.xray.settingsFile

The absolute path to the configuration file. Either settingsFile or settings must be specified. See https://www.v2fly.org/en_US/config/overview.html. Type: null or absolute path Default: null Example: "/etc/xray/config.json" Declared by: <nixpkgs/nixos/modules/services/networking/xray.nix>
