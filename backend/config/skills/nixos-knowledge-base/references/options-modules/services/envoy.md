---
module: services.envoy
option_count: 4
source: options.html
---

# services.envoy

## services.envoy.enable

Whether to enable Envoy reverse proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/envoy.nix>

## services.envoy.package

The envoy package to use. Type: package Default: pkgs.envoy Declared by: <nixpkgs/nixos/modules/services/networking/envoy.nix>

## services.envoy.requireValidConfig

Whether a failure during config validation at build time is fatal. When the config can’t be checked during build time, for example when it includes other files, disable this option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/envoy.nix>

## services.envoy.settings

Specify the configuration for Envoy in Nix. Type: JSON value Default: { } Example: { admin = { access_log_path = "/dev/null"; address = { socket_address = { protocol = "TCP"; address = "127.0.0.1"; port_value = 9901; }; }; }; static_resources = { listeners = []; clusters = []; }; } Declared by: <nixpkgs/nixos/modules/services/networking/envoy.nix>
