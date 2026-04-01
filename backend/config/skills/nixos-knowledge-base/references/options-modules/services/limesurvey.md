---
module: services.limesurvey
option_count: 7
source: options.html
---

# services.limesurvey

## services.limesurvey.enable

Whether to enable Limesurvey web application. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.package

The limesurvey package to use. Type: package Default: pkgs.limesurvey Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.config

LimeSurvey configuration. Refer to https://manual.limesurvey.org/Optional_settings for details on supported values. Type: limesurvey config type (str, int, bool or attribute set thereof) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.encryptionKeyFile

32-byte key used to encrypt variables in the database. Note: It should be string not a store path in order to prevent the password from being world readable Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.encryptionNonceFile

24-byte used to encrypt variables in the database. Note: It should be string not a store path in order to prevent the password from being world readable Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.poolConfig

Options for the LimeSurvey PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>

## services.limesurvey.webserver

Webserver to configure for reverse-proxying limesurvey. Type: one of “httpd”, “nginx” Default: "httpd" Example: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-apps/limesurvey.nix>
