---
module: services.firefly-iii
option_count: 9
source: options.html
---

# services.firefly-iii

## services.firefly-iii.enable

Whether to enable Firefly III: A free and open source personal finance manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.enableNginx

Whether to enable nginx or not. If enabled, an nginx virtual host will be created for access to firefly-iii. If not enabled, then you may use ${config.services.firefly-iii.package} as your document root in whichever webserver you wish to setup. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.package

The firefly-iii package to use. Type: package Default: pkgs.firefly-iii Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.dataDir

The place where firefly-iii stores its state. Type: absolute path Default: "/var/lib/firefly-iii" Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.group

Group under which firefly-iii runs. It is best to set this to the group of whatever webserver is being used as the frontend. Type: string Default: "If `services.firefly-iii.enableNginx` is true then `nginx` else firefly-iii" Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.poolConfig

Options for the Firefly III PHP pool. See the documentation on <literal>php-fpm.conf</literal> for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: '' { "pm" = "dynamic"; "pm.max_children" = 32; "pm.start_servers" = 2; "pm.min_spare_servers" = 2; "pm.max_spare_servers" = 4; "pm.max_requests" = 500; } '' Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.settings

Options for firefly-iii configuration. Refer to https://github.com/firefly-iii/firefly-iii/blob/main/.env.example for details on supported values. All <option>_FILE values supported by upstream are supported here. APP_URL will be the same as services.firefly-iii.virtualHost if the former is unset in services.firefly-iii.settings. Type: open submodule of attribute set of (string or signed integer or boolean) Default: { } Example: { APP_ENV = "production"; APP_KEY_FILE = "/var/secrets/firefly-iii-app-key.txt"; SITE_OWNER = "mail@example.com"; DB_CONNECTION = "mysql"; DB_HOST = "db"; DB_PORT = 3306; DB_DATABASE = "firefly"; DB_USERNAME = "firefly"; DB_PASSWORD_FILE = "/var/secrets/firefly-iii-mysql-password.txt"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.user

User account under which firefly-iii runs. Type: string Default: "firefly-iii" Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>

## services.firefly-iii.virtualHost

The hostname at which you wish firefly-iii to be served. If you have enabled nginx using services.firefly-iii.enableNginx then this will be used. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii.nix>
