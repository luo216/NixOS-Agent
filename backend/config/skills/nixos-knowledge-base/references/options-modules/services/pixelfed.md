---
module: services.pixelfed
option_count: 14
source: options.html
---

# services.pixelfed

## services.pixelfed.enable

Whether to enable a Pixelfed instance. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.package

The pixelfed package to use. Type: package Default: pkgs.pixelfed Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.dataDir

State directory of the pixelfed user which holds the application’s state and data. Type: string Default: "/var/lib/pixelfed" Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.domain

FQDN for the Pixelfed instance. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.group

Group account under which pixelfed runs. Note If left as the default value this group will automatically be created on system activation, otherwise you are responsible for ensuring the group exists before the pixelfed application starts. Type: string Default: "pixelfed" Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.maxUploadSize

Max upload size with units. Type: string Default: "8M" Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.nginx

With this option, you can customize an nginx virtual host which already has sensible defaults for Pixelfed. Set to {} if you do not need any customization to the virtual host. If enabled, then by default, the serverName is ${domain}, If this is set to null (the default), no nginx virtualHost will be configured. Type: null or (submodule) Default: null Example: { serverAliases = [ "pics.${config.networking.domain}" ]; enableACME = true; forceHttps = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.phpPackage

The php83 package to use. Type: package Default: pkgs.php83 Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.poolConfig

Options for Pixelfed’s PHP-FPM pool. Type: attribute set of (signed integer or string or boolean) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.runtimeDir

Ruutime directory of the pixelfed user which holds the application’s caches and temporary files. Type: string Default: "/run/pixelfed" Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.schedulerInterval

How often the Pixelfed cron task should run Type: string Default: "1d" Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.secretFile

A secret file to be sourced for the .env settings. Place APP_KEY and other settings that should not end up in the Nix store here. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.settings

.env settings for Pixelfed. Secrets should use secretFile option instead. Type: attribute set of (boolean or signed integer or string) Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>

## services.pixelfed.user

User account under which pixelfed runs. Note If left as the default value this user will automatically be created on system activation, otherwise you are responsible for ensuring the user exists before the pixelfed application starts. Type: string Default: "pixelfed" Declared by: <nixpkgs/nixos/modules/services/web-apps/pixelfed.nix>
