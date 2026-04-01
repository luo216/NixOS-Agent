---
module: services.monica
option_count: 12
source: options.html
---

# services.monica

## services.monica.enable

Whether to enable monica. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.appKeyFile

A file containing the Laravel APP_KEY - a 32 character long, base64 encoded key used for encryption where needed. Can be generated with <code>head -c 32 /dev/urandom | base64</code>. Type: absolute path Example: "/run/keys/monica-appkey" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.appURL

The root URL that you want to host monica on. All URLs in monica will be generated using this value. If you change this in the future you may need to run a command to update stored URLs in the database. Command example: <code>php artisan monica:update-url https://old.example.com https://new.example.com</code> Type: string Default: "http\${lib.optionalString tlsEnabled \"s\"}://\${cfg.hostname}" Example: "https://example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.config

monica configuration options to set in the <filename>.env</filename> file. Refer to <link xlink:href=“https://github.com/monicahq/monica”/> for details on supported values. Settings containing secret data should be set to an attribute set containing the attribute <literal>_secret</literal> - a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting <filename>.env</filename> file, the <literal>OIDC_CLIENT_SECRET</literal> key will be set to the contents of the <filename>/run/keys/oidc_secret</filename> file. Type: attribute set of (null or boolean or signed integer or 16 bit unsigned integer; between 0 and 65535 (both inclusive) or absolute path or string or (submodule)) Default: { } Example: '' { ALLOWED_IFRAME_HOSTS = "https://example.com"; WKHTMLTOPDF = "/home/user/bins/wkhtmltopdf"; AUTH_METHOD = "oidc"; OIDC_NAME = "MyLogin"; OIDC_DISPLAY_NAME_CLAIMS = "name"; OIDC_CLIENT_ID = "monica"; OIDC_CLIENT_SECRET = {_secret = "/run/keys/oidc_secret"}; OIDC_ISSUER = "https://keycloak.example.com/auth/realms/My%20Realm"; OIDC_ISSUER_DISCOVER = true; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.dataDir

monica data directory Type: absolute path Default: "/var/lib/monica" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.group

Group monica runs as. Type: string Default: "monica" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.hostname

The hostname to serve monica on. Type: string Default: config.networking.fqdn Example: "monica.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.maxUploadSize

The maximum size for uploads (e.g. images). Type: string Default: "18M" Example: "1G" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.nginx

With this option, you can customize the nginx virtualHost settings. Type: submodule Default: { } Example: '' { serverAliases = [ "monica.''${config.networking.domain}" ]; # To enable encryption and let let's encrypt take care of certificate forceSSL = true; enableACME = true; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.phpPackage

The php83 package to use. Type: package Default: pkgs.php83 Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.poolConfig

Options for the monica PHP pool. See the documentation on <literal>php-fpm.conf</literal> for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>

## services.monica.user

User monica runs as. Type: string Default: "monica" Declared by: <nixpkgs/nixos/modules/services/web-apps/monica.nix>
