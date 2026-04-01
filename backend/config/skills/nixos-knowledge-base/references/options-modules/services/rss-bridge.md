---
module: services.rss-bridge
option_count: 9
source: options.html
---

# services.rss-bridge

## services.rss-bridge.enable

Whether to enable rss-bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/rss-bridge.nix>

## services.rss-bridge.package

The rss-bridge package to use. Type: package Default: pkgs.rss-bridge Declared by: <nixpkgs/nixos/modules/services/web-apps/rss-bridge.nix>

## services.rss-bridge.config

Attribute set of arbitrary config options. Please consult the documentation at the wiki and sample config to see a list of available options. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Example: { system.enabled_bridges = [ "*" ]; error = { output = "http"; report_limit = 5; }; FileCache = { enable_purge = true; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/rss-bridge.nix>

## services.rss-bridge.dataDir

Location in which cache directory will be created. You can put config.ini.php in here. Type: string Default: "/var/lib/rss-bridge" Declared by: <nixpkgs/nixos/modules/services/web-apps/rss-bridge.nix>

## services.rss-bridge.group

The group under which the web application runs. Type: string Default: "{option}`config.services.rss-bridge.webserver` or \"rss-bridge\"" Declared by: <nixpkgs/nixos/modules/services/web-apps/rss-bridge.nix>

## services.rss-bridge.pool

Name of phpfpm pool that is used to run web-application. If null specified none will be created, otherwise automatically created with default values. Type: null or string Default: "rss-bridge" Declared by: <nixpkgs/nixos/modules/services/web-apps/rss-bridge.nix>

## services.rss-bridge.user

The user account under which both the service and the web application run. Type: string Default: "{option}`config.services.rss-bridge.webserver` or \"rss-bridge\"" Declared by: <nixpkgs/nixos/modules/services/web-apps/rss-bridge.nix>

## services.rss-bridge.virtualHost

Name of the nginx or caddy virtualhost to use and setup. If null, do not setup any virtualhost. Type: null or string Default: "rss-bridge" Declared by: <nixpkgs/nixos/modules/services/web-apps/rss-bridge.nix>

## services.rss-bridge.webserver

Type of virtualhost to use and setup. If null, do not setup any virtualhost. Type: null or one of “nginx”, “caddy” Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-apps/rss-bridge.nix>
