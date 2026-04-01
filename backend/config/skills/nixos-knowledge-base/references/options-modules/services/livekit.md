---
module: services.livekit
option_count: 5
source: options.html
---

# services.livekit

## services.livekit.enable

Whether to enable the livekit server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>

## services.livekit.package

The livekit package to use. Type: package Default: pkgs.livekit Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>

## services.livekit.keyFile

LiveKit key file holding one or multiple application secrets. Use livekit-server generate-keys to generate a random key name and secret. The file should have the format <keyname>: <secret>. Example: lk-jwt-service: f6lQGaHtM5HfgZjIcec3cOCRfiDqIine4CpZZnqdT5cE Individual key/secret pairs need to be passed to clients to connect to this instance. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>

## services.livekit.openFirewall

Opens port range for LiveKit on the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>

## services.livekit.settings

LiveKit configuration file expressed in nix. For an example configuration, see https://docs.livekit.io/home/self-hosting/deployment/#configuration. For all possible values, see https://github.com/livekit/livekit/blob/master/config-sample.yaml. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>
