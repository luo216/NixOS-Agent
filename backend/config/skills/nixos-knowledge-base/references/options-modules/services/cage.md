---
module: services.cage
option_count: 6
source: options.html
---

# services.cage

## services.cage.enable

Whether to enable cage kiosk service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/wayland/cage.nix>

## services.cage.package

The cage package to use. Type: package Default: pkgs.cage Declared by: <nixpkgs/nixos/modules/services/wayland/cage.nix>

## services.cage.environment

Additional environment variables to pass to Cage. Type: attribute set of string Default: { } Example: { WLR_LIBINPUT_NO_DEVICES = "1"; } Declared by: <nixpkgs/nixos/modules/services/wayland/cage.nix>

## services.cage.extraArguments

Additional command line arguments to pass to Cage. Type: list of string Default: [] Example: [ "-d" ] Declared by: <nixpkgs/nixos/modules/services/wayland/cage.nix>

## services.cage.program

Program to run in cage. Type: absolute path Default: "${pkgs.xterm}/bin/xterm" Declared by: <nixpkgs/nixos/modules/services/wayland/cage.nix>

## services.cage.user

User to log-in as. Type: string Default: "demo" Declared by: <nixpkgs/nixos/modules/services/wayland/cage.nix>
