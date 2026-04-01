---
module: services.mjpg-streamer
option_count: 5
source: options.html
---

# services.mjpg-streamer

## services.mjpg-streamer.enable

Whether to enable mjpg-streamer webcam streamer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/mjpg-streamer.nix>

## services.mjpg-streamer.group

mjpg-streamer group name. Type: string Default: "video" Declared by: <nixpkgs/nixos/modules/services/networking/mjpg-streamer.nix>

## services.mjpg-streamer.inputPlugin

Input plugin. See plugins documentation for more information. Type: string Default: "input_uvc.so" Declared by: <nixpkgs/nixos/modules/services/networking/mjpg-streamer.nix>

## services.mjpg-streamer.outputPlugin

Output plugin. @www@ is substituted for default mjpg-streamer www directory. See plugins documentation for more information. Type: string Default: "output_http.so -w @www@ -n -p 5050" Declared by: <nixpkgs/nixos/modules/services/networking/mjpg-streamer.nix>

## services.mjpg-streamer.user

mjpg-streamer user name. Type: string Default: "mjpg-streamer" Declared by: <nixpkgs/nixos/modules/services/networking/mjpg-streamer.nix>
