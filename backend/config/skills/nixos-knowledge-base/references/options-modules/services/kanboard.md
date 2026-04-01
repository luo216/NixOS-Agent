---
module: services.kanboard
option_count: 8
source: options.html
---

# services.kanboard

## services.kanboard.enable

Whether to enable Kanboard. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.package

The kanboard package to use. Type: package Default: pkgs.kanboard Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.dataDir

Default data folder for Kanboard. Type: string Default: "/var/lib/kanboard" Example: "/mnt/kanboard" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.domain

FQDN for the Kanboard instance. Type: string Default: "kanboard" Example: "kanboard.example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.group

Group under which Kanboard runs. Type: string Default: "kanboard" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.nginx

With this option, you can customize an NGINX virtual host which already has sensible defaults for Kanboard. Set to { } if you do not need any customization for the virtual host. If enabled, then by default, the serverName is ${domain}. If this is set to null (the default), no NGINX virtual host will be configured. Type: null or (submodule) Default: { } Example: { enableACME = true; forceHttps = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.settings

Customize the default settings, refer to https://github.com/kanboard/kanboard/blob/main/config.default.php for details on supported values. Type: attribute set of (string or signed integer or boolean) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>

## services.kanboard.user

User under which Kanboard runs. Type: string Default: "kanboard" Declared by: <nixpkgs/nixos/modules/services/web-apps/kanboard.nix>
