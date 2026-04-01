---
module: services.xserver.imwheel
option_count: 3
source: options.html
---

# services.xserver.imwheel

## services.xserver.imwheel.enable

Whether to enable IMWheel service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/imwheel.nix>

## services.xserver.imwheel.extraOptions

Additional command-line arguments to pass to imwheel. Type: list of string Default: [ "--buttons=45" ] Example: [ "--debug" ] Declared by: <nixpkgs/nixos/modules/services/x11/imwheel.nix>

## services.xserver.imwheel.rules

Window class translation rules. /etc/X11/imwheelrc is generated based on this config which means this config is global for all users. See official man pages for more information. Type: attribute set of string Default: { } Example: { ".*" = '' None, Up, Button4, 8 None, Down, Button5, 8 Shift_L, Up, Shift_L|Button4, 4 Shift_L, Down, Shift_L|Button5, 4 Control_L, Up, Control_L|Button4 Control_L, Down, Control_L|Button5 ''; } Declared by: <nixpkgs/nixos/modules/services/x11/imwheel.nix>
