---
module: services.v4l2-relayd.instances.<name>.input
option_count: 5
source: options.html
---

# services.v4l2-relayd.instances.<name>.input

## services.v4l2-relayd.instances.<name>.input.format

The video-format to read from input-stream. Type: string Default: "YUY2" Declared by: <nixpkgs/nixos/modules/services/video/v4l2-relayd.nix>

## services.v4l2-relayd.instances.<name>.input.framerate

The framerate to read from input-stream. Type: positive integer, meaning >0 Default: 30 Declared by: <nixpkgs/nixos/modules/services/video/v4l2-relayd.nix>

## services.v4l2-relayd.instances.<name>.input.height

The height to read from input-stream. Type: positive integer, meaning >0 Default: 720 Declared by: <nixpkgs/nixos/modules/services/video/v4l2-relayd.nix>

## services.v4l2-relayd.instances.<name>.input.pipeline

The gstreamer-pipeline to use for the input-stream. Type: string Declared by: <nixpkgs/nixos/modules/services/video/v4l2-relayd.nix>

## services.v4l2-relayd.instances.<name>.input.width

The width to read from input-stream. Type: positive integer, meaning >0 Default: 1280 Declared by: <nixpkgs/nixos/modules/services/video/v4l2-relayd.nix>
