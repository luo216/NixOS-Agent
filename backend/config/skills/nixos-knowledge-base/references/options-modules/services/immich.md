---
module: services.immich
option_count: 12
source: options.html
---

# services.immich

## services.immich.enable

Whether to enable Immich. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.package

The immich package to use. Type: package Default: pkgs.immich Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.accelerationDevices

A list of device paths to hardware acceleration devices that immich should have access to. This is useful when transcoding media files. The special value [ ] will disallow all devices using PrivateDevices. null will give access to all devices. Type: null or (list of string) Default: [ ] Example: [ "/dev/dri/renderD128" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.environment

Extra configuration environment variables. Refer to the documentation for options tagged with ‘server’, ‘api’ or ‘microservices’. Type: open submodule of attribute set of string Default: { } Example: { IMMICH_LOG_LEVEL = "verbose"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.group

The group immich should run as. Type: string Default: "immich" Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.host

The host that immich will listen on. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.mediaLocation

Directory used to store media files. If it is not the default, the directory has to be created manually such that the immich user is able to read and write to it. Type: absolute path Default: "/var/lib/immich" Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.openFirewall

Whether to open the immich port in the firewall Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.port

The port that immich will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 2283 Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.secretsFile

Path of a file with extra environment variables to be loaded from disk. This file is not added to the nix store, so it can be used to pass secrets to immich. Refer to the documentation for options. To set a database password set this to a file containing: DB_PASSWORD=<pass> Type: null or string Default: null Example: "/run/secrets/immich" Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.settings

Configuration for Immich. See https://immich.app/docs/install/config-file/ or navigate to https://my.immich.app/admin/system-settings for options and defaults. Setting it to null allows configuring Immich in the web interface. You can load secret values from a file in this configuration by setting somevalue._secret = "/path/to/file" instead of setting somevalue directly. Type: null or (open submodule of (JSON value)) Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>

## services.immich.user

The user immich should run as. Type: string Default: "immich" Declared by: <nixpkgs/nixos/modules/services/web-apps/immich.nix>
