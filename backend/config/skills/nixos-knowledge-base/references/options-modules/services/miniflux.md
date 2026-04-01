---
module: services.miniflux
option_count: 5
source: options.html
---

# services.miniflux

## services.miniflux.enable

Whether to enable miniflux. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/miniflux.nix>

## services.miniflux.package

The miniflux package to use. Type: package Default: pkgs.miniflux Declared by: <nixpkgs/nixos/modules/services/web-apps/miniflux.nix>

## services.miniflux.adminCredentialsFile

File containing the ADMIN_USERNAME and ADMIN_PASSWORD (length >= 6) in the format of an EnvironmentFile=, as described by systemd.exec(5). Type: null or absolute path Default: null Example: "/etc/nixos/miniflux-admin-credentials" Declared by: <nixpkgs/nixos/modules/services/web-apps/miniflux.nix>

## services.miniflux.config

Configuration for Miniflux, refer to https://miniflux.app/docs/configuration.html for documentation on the supported values. Type: open submodule of attribute set of (string or signed integer) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/miniflux.nix>

## services.miniflux.createDatabaseLocally

Whether a PostgreSQL database should be automatically created and configured on the local host. If set to false, you need provision a database yourself. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/miniflux.nix>
