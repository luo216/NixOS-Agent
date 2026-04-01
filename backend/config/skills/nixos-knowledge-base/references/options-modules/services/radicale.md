---
module: services.radicale
option_count: 6
source: options.html
---

# services.radicale

## services.radicale.enable

Whether to enable Radicale CalDAV and CardDAV server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/radicale.nix>

## services.radicale.package

Radicale package to use. Type: package Default: pkgs.radicale Declared by: <nixpkgs/nixos/modules/services/networking/radicale.nix>

## services.radicale.config

Radicale configuration, this will set the service configuration file. This option is mutually exclusive with settings. This option is deprecated. Use settings instead. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/radicale.nix>

## services.radicale.extraArgs

Extra arguments passed to the Radicale daemon. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/radicale.nix>

## services.radicale.rights

Configuration for Radicale’s rights file. See https://radicale.org/v3.html#authentication-and-rights. This option only works in conjunction with settings. Setting this will also set settings.rights.type and settings.rights.file to appropriate values. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them) Default: { } Example: root = { user = ".+"; collection = ""; permissions = "R"; }; principal = { user = ".+"; collection = "{user}"; permissions = "RW"; }; calendars = { user = ".+"; collection = "{user}/[^/]+"; permissions = "rw"; }; Declared by: <nixpkgs/nixos/modules/services/networking/radicale.nix>

## services.radicale.settings

Configuration for Radicale. See https://radicale.org/v3.html#configuration. This option is mutually exclusive with config. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them) Default: { } Example: server = { hosts = [ "0.0.0.0:5232" "[::]:5232" ]; }; auth = { type = "htpasswd"; htpasswd_filename = "/etc/radicale/users"; htpasswd_encryption = "bcrypt"; }; storage = { filesystem_folder = "/var/lib/radicale/collections"; }; Declared by: <nixpkgs/nixos/modules/services/networking/radicale.nix>
