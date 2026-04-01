---
module: services.dolibarr
option_count: 10
source: options.html
---

# services.dolibarr

## services.dolibarr.enable

Whether to enable dolibarr. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.package

The dolibarr package to use. Type: package Default: pkgs.dolibarr Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.domain

Domain name of your server. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.group

Group account under which dolibarr runs. Note If left as the default value this group will automatically be created on system activation, otherwise you are responsible for ensuring the group exists before the dolibarr application starts. Type: string Default: "dolibarr" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.h2o

With this option, you can customize an H2O virtual host which already has sensible defaults for Dolibarr. Set to { } if you do not need any customization to the virtual host. If enabled, then by default, the serverName is ${domain}, If this is set to null (the default), no H2O hosts will be configured. Type: null or (submodule) Default: null Example: { acme.enable = true; tls.policy = "force"; compress = "ON"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.nginx

With this option, you can customize an nginx virtual host which already has sensible defaults for Dolibarr. Set to {} if you do not need any customization to the virtual host. If enabled, then by default, the serverName is ${domain}, SSL is active, and certificates are acquired via ACME. If this is set to null (the default), no nginx virtualHost will be configured. Type: null or (submodule) Default: null Example: { serverAliases = [ "dolibarr.${config.networking.domain}" "erp.${config.networking.domain}" ]; enableACME = false; } Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.poolConfig

Options for the Dolibarr PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.settings

Dolibarr settings, see https://github.com/Dolibarr/dolibarr/blob/develop/htdocs/conf/conf.php.example for details. Type: attribute set of (boolean or signed integer or string) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.stateDir

State and configuration directory dolibarr will use. Type: string Default: "/var/lib/dolibarr" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>

## services.dolibarr.user

User account under which dolibarr runs. Note If left as the default value this user will automatically be created on system activation, otherwise you are responsible for ensuring the user exists before the dolibarr application starts. Type: string Default: "dolibarr" Declared by: <nixpkgs/nixos/modules/services/web-apps/dolibarr.nix>
