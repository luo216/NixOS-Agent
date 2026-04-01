---
module: services.v4l2-relayd.instances.<name>
option_count: 4
source: options.html
---

# services.v4l2-relayd.instances.<name>

## services.v4l2-relayd.instances.<name>.enable

Whether to enable this v4l2-relayd instance. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/v4l2-relayd.nix>

## services.v4l2-relayd.instances.<name>.cardLabel

The name the camera will show up as. Type: string Declared by: <nixpkgs/nixos/modules/services/video/v4l2-relayd.nix>

## services.v4l2-relayd.instances.<name>.extraPackages

Extra packages to add to GST_PLUGIN_PATH for the instance. Type: list of package Default: [ ] Declared by: <nixpkgs/nixos/modules/services/video/v4l2-relayd.nix>

## services.v4l2-relayd.instances.<name>.name

The name of the instance. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/video/v4l2-relayd.nix>
