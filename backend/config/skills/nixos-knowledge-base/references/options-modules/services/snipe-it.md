---
module: services.snipe-it
option_count: 11
source: options.html
---

# services.snipe-it

## services.snipe-it.enable

Whether to enable snipe-it, a free open source IT asset/license management system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.appKeyFile

A file containing the Laravel APP_KEY - a 32 character long, base64 encoded key used for encryption where needed. Can be generated with head -c 32 /dev/urandom | base64. Type: absolute path Example: "/run/keys/snipe-it/appkey" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.appURL

The root URL that you want to host Snipe-IT on. All URLs in Snipe-IT will be generated using this value. If you change this in the future you may need to run a command to update stored URLs in the database. Command example: snipe-it snipe-it:update-url https://old.example.com https://new.example.com Type: string Default: '' http''${lib.optionalString tlsEnabled "s"}://''${cfg.hostName} '' Example: "https://example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.config

Snipe-IT configuration options to set in the .env file. Refer to https://snipe-it.readme.io/docs/configuration for details on supported values. Settings containing secret data should be set to an attribute set containing the attribute _secret - a string pointing to a file containing the value the option should be set to. See the example to get a better picture of this: in the resulting .env file, the OIDC_CLIENT_SECRET key will be set to the contents of the /run/keys/oidc_secret file. Type: attribute set of (null or boolean or signed integer or 16 bit unsigned integer; between 0 and 65535 (both inclusive) or absolute path or string or (submodule)) Default: { } Example: { ALLOWED_IFRAME_HOSTS = "https://example.com"; WKHTMLTOPDF = "${pkgs.wkhtmltopdf}/bin/wkhtmltopdf"; AUTH_METHOD = "oidc"; OIDC_NAME = "MyLogin"; OIDC_DISPLAY_NAME_CLAIMS = "name"; OIDC_CLIENT_ID = "snipe-it"; OIDC_CLIENT_SECRET = {_secret = "/run/keys/oidc_secret"}; OIDC_ISSUER = "https://keycloak.example.com/auth/realms/My%20Realm"; OIDC_ISSUER_DISCOVER = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.dataDir

snipe-it data directory Type: absolute path Default: "/var/lib/snipe-it" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.group

Group snipe-it runs as. Type: string Default: "snipeit" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.hostName

The hostname to serve Snipe-IT on. Type: string Default: config.networking.fqdnOrHostName Example: "snipe-it.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.maxUploadSize

The maximum size for uploads (e.g. images). Type: string Default: "18M" Example: "1G" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.nginx

With this option, you can customize the nginx virtualHost settings. Type: submodule Default: { } Example: { serverAliases = [ "snipe-it.${config.networking.domain}" ]; # To enable encryption and let let's encrypt take care of certificate forceSSL = true; enableACME = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.poolConfig

Options for the snipe-it PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>

## services.snipe-it.user

User snipe-it runs as. Type: string Default: "snipeit" Declared by: <nixpkgs/nixos/modules/services/web-apps/snipe-it.nix>
