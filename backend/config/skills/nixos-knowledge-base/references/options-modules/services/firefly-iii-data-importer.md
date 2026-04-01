---
module: services.firefly-iii-data-importer
option_count: 9
source: options.html
---

# services.firefly-iii-data-importer

## services.firefly-iii-data-importer.enable

Whether to enable Firefly III Data Importer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii-data-importer.nix>

## services.firefly-iii-data-importer.enableNginx

Whether to enable nginx or not. If enabled, an nginx virtual host will be created for access to firefly-iii data importer. If not enabled, then you may use ${config.services.firefly-iii-data-importer.package} as your document root in whichever webserver you wish to setup. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii-data-importer.nix>

## services.firefly-iii-data-importer.package

The firefly-iii-data-importer package served by php-fpm and the webserver of choice. This option can be used to point the webserver to the correct root. It may also be used to set the package to a different version, say a development version. Type: package Default: pkgs.firefly-iii-data-importer Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii-data-importer.nix>

## services.firefly-iii-data-importer.dataDir

The place where firefly-iii data importer stores its state. Type: absolute path Default: "/var/lib/firefly-iii-data-importer" Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii-data-importer.nix>

## services.firefly-iii-data-importer.group

Group under which firefly-iii-data-importer runs. It is best to set this to the group of whatever webserver is being used as the frontend. Type: string Default: "If `services.firefly-iii-data-importer.enableNginx` is true then `nginx` else firefly-iii-data-importer" Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii-data-importer.nix>

## services.firefly-iii-data-importer.poolConfig

Options for the Firefly III Data Importer PHP pool. See the documentation on <literal>php-fpm.conf</literal> for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { "pm" = "dynamic"; "pm.max_children" = 32; "pm.start_servers" = 2; "pm.min_spare_servers" = 2; "pm.max_spare_servers" = 4; "pm.max_requests" = 500; } Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii-data-importer.nix>

## services.firefly-iii-data-importer.settings

Options for firefly-iii data importer configuration. Refer to https://github.com/firefly-iii/data-importer/blob/main/.env.example for details on supported values. All <option>_FILE values supported by upstream are supported here. APP_URL will be the same as services.firefly-iii-data-importer.virtualHost if the former is unset in services.firefly-iii-data-importer.settings. Type: open submodule of attribute set of (string or signed integer or boolean) Default: { } Example: { APP_ENV = "local"; LOG_CHANNEL = "syslog"; FIREFLY_III_ACCESS_TOKEN= = "/var/secrets/firefly-iii-access-token.txt"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii-data-importer.nix>

## services.firefly-iii-data-importer.user

User account under which firefly-iii-data-importer runs. Type: string Default: "firefly-iii-data-importer" Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii-data-importer.nix>

## services.firefly-iii-data-importer.virtualHost

The hostname at which you wish firefly-iii-data-importer to be served. If you have enabled nginx using services.firefly-iii-data-importer.enableNginx then this will be used. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/firefly-iii-data-importer.nix>
