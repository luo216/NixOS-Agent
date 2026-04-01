---
module: services.bookstack
option_count: 10
source: options.html
---

# services.bookstack

## services.bookstack.enable

Whether to enable BookStack: A platform to create documentation/wiki content built with PHP & Laravel. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.package

The bookstack package to use. Type: package Default: pkgs.bookstack Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.dataDir

BookStack data directory Type: absolute path Default: "/var/lib/bookstack" Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.group

Group bookstack runs as Type: string Default: "If `services.bookstack.nginx` has any attributes then `nginx` else bookstack" Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.hostname

The hostname to serve BookStack on. Type: string Default: config.networking.fqdnOrHostName Example: "bookstack.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.maxUploadSize

The maximum size for uploads (e.g. images). Type: string Default: "18M" Example: "1G" Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.nginx

With this option, you can customize the nginx virtualHost settings. Type: null or (submodule) Default: null Example: { serverAliases = [ "bookstack.${config.networking.domain}" ]; # To enable encryption and let let's encrypt take care of certificate forceSSL = true; enableACME = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.poolConfig

Options for the Bookstack PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: '' { "pm" = "dynamic"; "pm.max_children" = 32; "pm.start_servers" = 2; "pm.min_spare_servers" = 2; "pm.max_spare_servers" = 4; "pm.max_requests" = 500; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.settings

Options for Bookstack configuration. Refer to https://github.com/BookStackApp/BookStack/blob/development/.env.example for details on supported values. For passing secrets, append “_FILE” to the setting name. For example, you may create a file /var/secrets/db_pass.txt and set services.bookstack.settings.DB_PASSWORD_FILE to /var/secrets/db_pass.txt instead of providing a plaintext password using services.bookstack.settings.DB_PASSWORD. Type: open submodule of attribute set of (string or signed integer or boolean) Default: { } Example: { APP_ENV = "production"; APP_KEY_FILE = "/var/secrets/bookstack-app-key.txt"; DB_HOST = "db"; DB_PORT = 3306; DB_DATABASE = "bookstack"; DB_USERNAME = "bookstack"; DB_PASSWORD_FILE = "/var/secrets/bookstack-mysql-password.txt"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>

## services.bookstack.user

User bookstack runs as Type: string Default: "bookstack" Declared by: <nixpkgs/nixos/modules/services/web-apps/bookstack.nix>
