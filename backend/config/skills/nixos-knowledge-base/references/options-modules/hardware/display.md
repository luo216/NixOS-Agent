---
module: hardware.display
option_count: 1
source: options.html
---

# hardware.display

## hardware.display.outputs

Hardware/kernel-level configuration of specific outputs. Type: attribute set of (submodule) Default: { } Example: { edid.modelines."PG278Q_60" = "241.50 2560 2608 2640 2720 1440 1443 1448 1481 -hsync +vsync"; outputs."DP-1".edid = "PG278Q_60.bin"; outputs."DP-1".mode = "e"; } Declared by: <nixpkgs/nixos/modules/services/hardware/display.nix>
