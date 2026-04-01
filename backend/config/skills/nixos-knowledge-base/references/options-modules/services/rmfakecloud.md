---
module: services.rmfakecloud
option_count: 7
source: options.html
---

# services.rmfakecloud

## services.rmfakecloud.enable

Whether to enable rmfakecloud remarkable self-hosted cloud. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/rmfakecloud.nix>

## services.rmfakecloud.package

The rmfakecloud package to use. Type: package Default: pkgs.rmfakecloud Declared by: <nixpkgs/nixos/modules/services/misc/rmfakecloud.nix>

## services.rmfakecloud.environmentFile

Path to an environment file loaded for the rmfakecloud service. This can be used to securely store tokens and secrets outside of the world-readable Nix store. Since this file is read by systemd, it may have permission 0400 and be owned by root. Type: null or absolute path Default: null Example: "/etc/secrets/rmfakecloud.env" Declared by: <nixpkgs/nixos/modules/services/misc/rmfakecloud.nix>

## services.rmfakecloud.extraSettings

Extra settings in the form of a set of key-value pairs. For tokens and secrets, use environmentFile instead. Available settings are listed on https://ddvk.github.io/rmfakecloud/install/configuration/. Type: attribute set of string Default: { } Example: { DATADIR = "/custom/path/for/rmfakecloud/data"; } Declared by: <nixpkgs/nixos/modules/services/misc/rmfakecloud.nix>

## services.rmfakecloud.logLevel

Logging level. Type: one of “info”, “debug”, “warn”, “error” Default: "info" Declared by: <nixpkgs/nixos/modules/services/misc/rmfakecloud.nix>

## services.rmfakecloud.port

Listening port number. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/misc/rmfakecloud.nix>

## services.rmfakecloud.storageUrl

URL used by the tablet to access the rmfakecloud service. Type: string Example: "https://local.appspot.com" Declared by: <nixpkgs/nixos/modules/services/misc/rmfakecloud.nix>
