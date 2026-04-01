---
module: services.xserver.xrandrHeads.*
option_count: 3
source: options.html
---

# services.xserver.xrandrHeads.*

## services.xserver.xrandrHeads.*.monitorConfig

Extra lines to append to the Monitor section verbatim. Available options are documented in the MONITOR section in xorg.conf(5). Type: strings concatenated with “\n” Default: "" Example: '' DisplaySize 408 306 Option "DPMS" "false" '' Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.xrandrHeads.*.output

The output name of the monitor, as shown by xrandr(1) invoked without arguments. Type: string Example: "DVI-0" Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>

## services.xserver.xrandrHeads.*.primary

Whether this head is treated as the primary monitor, Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/xserver.nix>
