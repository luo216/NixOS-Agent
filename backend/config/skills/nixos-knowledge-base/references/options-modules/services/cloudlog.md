---
module: services.cloudlog
option_count: 7
source: options.html
---

# services.cloudlog

## services.cloudlog.enable

Whether to enable Cloudlog. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.baseUrl

Cloudlog base URL Type: string Default: "http://localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.dataDir

Cloudlog data directory. Type: string Default: "/var/lib/cloudlog" Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.extraConfig

Any additional text to be appended to the config.php configuration file. This is a PHP script. For configuration settings, see https://github.com/magicbug/Cloudlog/wiki/Cloudlog.php-Configuration-File. Type: string Default: "" Example: '' $config['show_time'] = TRUE; '' Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.poolConfig

Options for Cloudlog’s PHP-FPM pool. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.user

User account under which Cloudlog runs. Type: string Default: "cloudlog" Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>

## services.cloudlog.virtualHost

Name of the nginx virtualhost to use and setup. If null, do not setup any virtualhost. Type: null or string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/cloudlog.nix>
