---
module: programs.uwsm.waylandCompositors.<name>
option_count: 4
source: options.html
---

# programs.uwsm.waylandCompositors.<name>

## programs.uwsm.waylandCompositors.<name>.binPath

The wayland-compositor binary path that will be called by UWSM. It is recommended to use the /run/current-system/sw/bin/ path instead of lib.getExe pkgs.<compositor> to avoid version mismatch of the compositor used by UWSM and the one installed in the system. Type: absolute path Example: "/run/current-system/sw/bin/ExampleCompositor" Declared by: <nixpkgs/nixos/modules/programs/wayland/uwsm.nix>

## programs.uwsm.waylandCompositors.<name>.comment

The comment field of the desktop entry file. Type: string Default: "An intelligent Wayland compositor managed by UWSM." Declared by: <nixpkgs/nixos/modules/programs/wayland/uwsm.nix>

## programs.uwsm.waylandCompositors.<name>.extraArgs

Extra command-line arguments pass to to the compsitor. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/wayland/uwsm.nix>

## programs.uwsm.waylandCompositors.<name>.prettyName

The full name of the desktop entry file. Type: string Example: "ExampleWaylandCompositor" Declared by: <nixpkgs/nixos/modules/programs/wayland/uwsm.nix>
