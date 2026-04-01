---
module: services.powerdns-admin
option_count: 5
source: options.html
---

# services.powerdns-admin

## services.powerdns-admin.enable

Whether to enable the PowerDNS web interface. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/powerdns-admin.nix>

## services.powerdns-admin.config

Configuration python file. See the example configuration for options. Also see Flask Session configuration as the version shipped with NixOS is more recent than the one PowerDNS-Admin expects and it requires explicit configuration. Type: string Default: "" Example: '' import cachelib BIND_ADDRESS = '127.0.0.1' PORT = 8000 SQLALCHEMY_DATABASE_URI = 'postgresql://powerdnsadmin@/powerdnsadmin?host=/run/postgresql' SESSION_TYPE = 'cachelib' SESSION_CACHELIB = cachelib.simple.SimpleCache() '' Declared by: <nixpkgs/nixos/modules/services/web-apps/powerdns-admin.nix>

## services.powerdns-admin.extraArgs

Extra arguments passed to powerdns-admin. Type: list of string Default: [ ] Example: [ "-b" "127.0.0.1:8000" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/powerdns-admin.nix>

## services.powerdns-admin.saltFile

The salt used for serialization. This should be set, otherwise the default is used. Set this to null to ignore this setting and configure it through another way. Type: null or absolute path Example: "/etc/powerdns-admin/salt" Declared by: <nixpkgs/nixos/modules/services/web-apps/powerdns-admin.nix>

## services.powerdns-admin.secretKeyFile

The secret used to create cookies. This needs to be set, otherwise the default is used and everyone can forge valid login cookies. Set this to null to ignore this setting and configure it through another way. Type: null or absolute path Example: "/etc/powerdns-admin/secret" Declared by: <nixpkgs/nixos/modules/services/web-apps/powerdns-admin.nix>
