---
module: services.mediamtx
option_count: 5
source: options.html
---

# services.mediamtx

## services.mediamtx.enable

Whether to enable MediaMTX. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/mediamtx.nix>

## services.mediamtx.package

The mediamtx package to use. Type: package Default: pkgs.mediamtx Declared by: <nixpkgs/nixos/modules/services/video/mediamtx.nix>

## services.mediamtx.allowVideoAccess

Whether to enable access to video devices like cameras on the system . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/mediamtx.nix>

## services.mediamtx.env

Extra environment variables for MediaMTX Type: attribute set of anything Default: { } Example: { MTX_CONFKEY = "mykey"; } Declared by: <nixpkgs/nixos/modules/services/video/mediamtx.nix>

## services.mediamtx.settings

Settings for MediaMTX. Refer to the defaults at https://github.com/bluenviron/mediamtx/blob/main/mediamtx.yml. Type: YAML 1.1 value Default: { } Example: { paths = { cam = { runOnInit = "\${lib.getExe pkgs.ffmpeg} -f v4l2 -i /dev/video0 -f rtsp rtsp://localhost:$RTSP_PORT/$RTSP_PATH"; runOnInitRestart = true; }; }; } Declared by: <nixpkgs/nixos/modules/services/video/mediamtx.nix>
