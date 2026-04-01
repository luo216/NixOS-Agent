---
module: services.centrifugo
option_count: 6
source: options.html
---

# services.centrifugo

## services.centrifugo.enable

Whether to enable Centrifugo messaging server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/centrifugo.nix>

## services.centrifugo.package

The centrifugo package to use. Type: package Default: pkgs.centrifugo Declared by: <nixpkgs/nixos/modules/services/networking/centrifugo.nix>

## services.centrifugo.credentials

Environment variables with absolute paths to credentials files to load on service startup. Type: attribute set of absolute path Default: { } Example: { CENTRIFUGO_UNI_GRPC_TLS_KEY = "/run/keys/centrifugo-uni-grpc-tls.key"; } Declared by: <nixpkgs/nixos/modules/services/networking/centrifugo.nix>

## services.centrifugo.environmentFiles

Files to load environment variables from. Options set via environment variables take precedence over settings. See the Centrifugo documentation for the environment variable name format. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/centrifugo.nix>

## services.centrifugo.extraGroups

Additional groups for the systemd service. Type: list of string Default: [ ] Example: [ "redis-centrifugo" ] Declared by: <nixpkgs/nixos/modules/services/networking/centrifugo.nix>

## services.centrifugo.settings

Declarative Centrifugo configuration. See the Centrifugo documentation for a list of options. Type: JSON value Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/centrifugo.nix>
