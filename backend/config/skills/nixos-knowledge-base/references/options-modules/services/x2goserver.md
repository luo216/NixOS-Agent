---
module: services.x2goserver
option_count: 4
source: options.html
---

# services.x2goserver

## services.x2goserver.enable

Enables the x2goserver module. NOTE: This will create a good amount of symlinks in /usr/local/bin Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/x2goserver.nix>

## services.x2goserver.package

The x2goserver package to use. Type: package Default: pkgs.x2goserver Declared by: <nixpkgs/nixos/modules/services/networking/x2goserver.nix>

## services.x2goserver.nxagentDefaultOptions

List of default nx agent options. Type: list of string Default: [ "-extension GLX" "-nolisten tcp" ] Declared by: <nixpkgs/nixos/modules/services/networking/x2goserver.nix>

## services.x2goserver.settings

x2goserver.conf ini configuration as nix attributes. See x2goserver.conf(5) for details Type: attribute set of (attribute set) Default: { } Example: { superenicer = { "enable" = "yes"; "idle-nice-level" = 19; }; telekinesis = { "enable" = "no"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/x2goserver.nix>
