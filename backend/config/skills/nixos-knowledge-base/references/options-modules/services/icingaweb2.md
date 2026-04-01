---
module: services.icingaweb2
option_count: 11
source: options.html
---

# services.icingaweb2

## services.icingaweb2.enable

Whether to enable the icingaweb2 web interface. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/icingaweb2.nix>

## services.icingaweb2.authentications

authentication.ini contents. Will automatically be converted to a .ini file. If the value is null, no authentication.ini is created and you can modify it manually (e.g. via the web interface). Type: null or (attribute set) Default: null Example: { icingaweb = { backend = "db"; resource = "icingaweb_db"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/icingaweb2.nix>

## services.icingaweb2.generalConfig

config.ini contents. Will automatically be converted to a .ini file. If you don’t set global.module_path, the module will take care of it. If the value is null, no config.ini is created and you can modify it manually (e.g. via the web interface). Note that you need to update module_path manually. Type: null or (attribute set) Default: null Example: { general = { config_resource = "icingaweb_db"; showStacktraces = 1; }; logging = { level = "CRITICAL"; log = "syslog"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/icingaweb2.nix>

## services.icingaweb2.groupBackends

groups.ini contents. Will automatically be converted to a .ini file. If the value is null, no groups.ini is created and you can modify it manually (e.g. via the web interface). Type: null or (attribute set) Default: null Example: { icingaweb = { backend = "db"; resource = "icingaweb_db"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/icingaweb2.nix>

## services.icingaweb2.libraryPaths

Libraries to add to the Icingaweb2 library path. The name of the attribute is the name of the library, the value is the package to add. Type: attribute set of package Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/icingaweb2.nix>

## services.icingaweb2.modulePackages

Name-package attrset of Icingaweb 2 modules packages to enable. If you enable modules manually (e.g. via the web ui), they will not be touched. Type: attribute set of package Default: { } Example: { "snow" = icingaweb2Modules.theme-snow; } Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/icingaweb2.nix>

## services.icingaweb2.pool

Name of existing PHP-FPM pool that is used to run Icingaweb2. If not specified, a pool will automatically created with default values. Type: string Default: "icingaweb2" Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/icingaweb2.nix>

## services.icingaweb2.resources

resources.ini contents. Will automatically be converted to a .ini file. If the value is null, no resources.ini is created and you can modify it manually (e.g. via the web interface). Note that if you set passwords here, they will go into the nix store. Type: null or (attribute set) Default: null Example: { icingaweb_db = { db = "mysql"; dbname = "icingaweb2"; host = "localhost"; password = "icingaweb2"; type = "db"; username = "icingaweb2"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/icingaweb2.nix>

## services.icingaweb2.roles

roles.ini contents. Will automatically be converted to a .ini file. If the value is null, no roles.ini is created and you can modify it manually (e.g. via the web interface). Type: null or (attribute set) Default: null Example: { Administrators = { permissions = "*"; users = "admin"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/icingaweb2.nix>

## services.icingaweb2.timezone

PHP-compliant timezone specification Type: string Default: "UTC" Example: "Europe/Berlin" Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/icingaweb2.nix>

## services.icingaweb2.virtualHost

Name of the nginx virtualhost to use and setup. If null, no virtualhost is set up. Type: null or string Default: "icingaweb2" Declared by: <nixpkgs/nixos/modules/services/web-apps/icingaweb2/icingaweb2.nix>
