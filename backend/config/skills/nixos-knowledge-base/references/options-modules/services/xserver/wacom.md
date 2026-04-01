---
module: services.xserver.wacom
option_count: 1
source: options.html
---

# services.xserver.wacom

## services.xserver.wacom.enable

Whether to enable the Wacom touchscreen/digitizer/tablet. If you ever have any issues such as, try switching to terminal (ctrl-alt-F1) and back which will make Xorg reconfigure the device ? If you’re not satisfied by the default behaviour you can override environment.etc."X11/xorg.conf.d/70-wacom.conf" in configuration.nix easily. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/x11/hardware/wacom.nix>
