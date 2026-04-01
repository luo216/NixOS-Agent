---
module: services.davis
option_count: 12
source: options.html
---

# services.davis

## services.davis.enable

Whether to enable Davis is a caldav and carddav server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.package

The davis package to use. Type: package Default: pkgs.davis Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.adminLogin

Username for the admin account. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.adminPasswordFile

The full path to a file that contains the admin’s password. Must be readable by the user. Type: absolute path Example: "/run/secrets/davis-admin-pass" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.appSecretFile

A file containing the Symfony APP_SECRET - Its value should be a series of characters, numbers and symbols chosen randomly and the recommended length is around 32 characters. Can be generated with <code>cat /dev/urandom | tr -dc a-zA-Z0-9 | fold -w 48 | head -n 1</code>. Type: absolute path Example: "/run/secrets/davis-appsecret" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.config

Type: attribute set of (null or boolean or signed integer or 16 bit unsigned integer; between 0 and 65535 (both inclusive) or absolute path or string or (submodule)) Default: { } Example: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.dataDir

Davis data directory. Type: absolute path Default: "/var/lib/davis" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.group

Group davis runs as. Type: string Default: "davis" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.hostname

Domain of the host to serve davis under. You may want to change it if you run Davis on a different URL than davis.yourdomain. Type: string Example: "davis.yourdomain.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.nginx

Use this option to customize an nginx virtual host. To disable the nginx set this to null. Type: null or (submodule) Default: { } Example: '' { serverAliases = [ "dav.''${config.networking.domain}" ]; # To enable encryption and let let's encrypt take care of certificate forceSSL = true; enableACME = true; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.poolConfig

Options for the davis PHP pool. See the documentation on <literal>php-fpm.conf</literal> for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>

## services.davis.user

User davis runs as. Type: string Default: "davis" Declared by: <nixpkgs/nixos/modules/services/web-apps/davis.nix>
