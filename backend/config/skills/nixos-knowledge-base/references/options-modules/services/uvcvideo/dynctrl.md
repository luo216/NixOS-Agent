---
module: services.uvcvideo.dynctrl
option_count: 2
source: options.html
---

# services.uvcvideo.dynctrl

## services.uvcvideo.dynctrl.enable

Whether to enable uvcvideo dynamic controls. Note that enabling this brings the uvcdynctrl tool into your environment and register all dynamic controls from specified packages to the uvcvideo driver. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/video/uvcvideo/default.nix>

## services.uvcvideo.dynctrl.packages

List of packages containing uvcvideo dynamic controls rules. All files found in «pkg»/share/uvcdynctrl/data will be included. Note that these will serve as input to the libwebcam package which through its own udev rule will register the dynamic controls from specified packages to the uvcvideo driver. Type: list of absolute path Example: [ pkgs.tiscamera ] Declared by: <nixpkgs/nixos/modules/hardware/video/uvcvideo/default.nix>
