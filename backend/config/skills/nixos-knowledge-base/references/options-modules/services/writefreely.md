---
module: services.writefreely
option_count: 7
source: options.html
---

# services.writefreely

## services.writefreely.enable

Whether to enable Writefreely, build a digital writing community. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.package

The writefreely package to use. Type: package Default: pkgs.writefreely Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.group

Group under which Writefreely is ran. Type: string Default: "writefreely" Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.host

The public host name to serve. Type: string Default: "" Example: "example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.settings

Writefreely configuration (config.ini). Refer to https://writefreely.org/docs/latest/admin/config for details. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.stateDir

The state directory where keys and data are stored. Type: absolute path Default: "/var/lib/writefreely" Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>

## services.writefreely.user

User under which Writefreely is ran. Type: string Default: "writefreely" Declared by: <nixpkgs/nixos/modules/services/web-apps/writefreely.nix>
