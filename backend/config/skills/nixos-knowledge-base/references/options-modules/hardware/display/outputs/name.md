---
module: hardware.display.outputs.<name>
option_count: 2
source: options.html
---

# hardware.display.outputs.<name>

## hardware.display.outputs.<name>.edid

An EDID filename to be used for configured display, as in edid/<filename>. See for more information: hardware.display.edid.packages https://wiki.archlinux.org/title/Kernel_mode_setting#Forcing_modes_and_EDID Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/display.nix>

## hardware.display.outputs.<name>.mode

A video kernel parameter (framebuffer mode) configuration for the specific output: <xres>x<yres>[M][R][-<bpp>][@<refresh>][i][m][eDd] See for more information: https://docs.kernel.org/fb/modedb.html https://wiki.archlinux.org/title/Kernel_mode_setting#Forcing_modes Type: null or string Default: null Example: "e" Declared by: <nixpkgs/nixos/modules/services/hardware/display.nix>
