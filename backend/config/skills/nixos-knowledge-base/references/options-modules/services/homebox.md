---
module: services.homebox
option_count: 5
source: options.html
---

# services.homebox

## services.homebox.enable

Whether to enable homebox. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/homebox.nix>

## services.homebox.package

The homebox package to use. Type: package Default: pkgs.homebox Declared by: <nixpkgs/nixos/modules/services/web-apps/homebox.nix>

## services.homebox.group

Group under which Homebox runs. Type: string Default: "homebox" Declared by: <nixpkgs/nixos/modules/services/web-apps/homebox.nix>

## services.homebox.settings

The homebox configuration as environment variables. For definitions and available options see the upstream documentation. Type: open submodule of attribute set of (null or string) Default: { HBOX_STORAGE_CONN_STRING = "file:///var/lib/homebox"; HBOX_STORAGE_PREFIX_PATH = "data"; HBOX_DATABASE_DRIVER = "sqlite3"; HBOX_DATABASE_SQLITE_PATH = "/var/lib/homebox/data/homebox.db?_pragma=busy_timeout=999&_pragma=journal_mode=WAL&_fk=1"; HBOX_OPTIONS_ALLOW_REGISTRATION = "false"; HBOX_OPTIONS_CHECK_GITHUB_RELEASE = "false"; HBOX_MODE = "production"; HOME = "/var/lib/homebox"; TMPDIR = "/var/lib/homebox/tmp"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/homebox.nix>

## services.homebox.user

User account under which Homebox runs. Type: string Default: "homebox" Declared by: <nixpkgs/nixos/modules/services/web-apps/homebox.nix>
