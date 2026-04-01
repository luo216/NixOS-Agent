---
module: services.ustreamer
option_count: 6
source: options.html
---

# services.ustreamer

## services.ustreamer.enable

Whether to enable µStreamer, a lightweight MJPEG-HTTP streamer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/ustreamer.nix>

## services.ustreamer.package

The ustreamer package to use. Type: package Default: pkgs.ustreamer Declared by: <nixpkgs/nixos/modules/services/video/ustreamer.nix>

## services.ustreamer.autoStart

Wether to start µStreamer on boot. Disabling this will use socket activation. The service will stop gracefully after some inactivity. Disabling this will set --exit-on-no-clients=300 Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/video/ustreamer.nix>

## services.ustreamer.device

The v4l2 device to stream. Type: absolute path Default: "/dev/video0" Example: "/dev/v4l/by-id/usb-0000_Dummy_abcdef-video-index0" Declared by: <nixpkgs/nixos/modules/services/video/ustreamer.nix>

## services.ustreamer.extraArgs

Extra arguments to pass to ustreamer. See ustreamer(1) Type: list of string Default: [ ] Example: [ "--resolution=1920x1080" ] Declared by: <nixpkgs/nixos/modules/services/video/ustreamer.nix>

## services.ustreamer.listenAddress

Address to expose the HTTP server. This accepts values for ListenStream= defined in systemd.socket(5) Type: string Default: "0.0.0.0:8080" Example: "/run/ustreamer.sock" Declared by: <nixpkgs/nixos/modules/services/video/ustreamer.nix>
