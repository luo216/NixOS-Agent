---
module: services.frigate.settings.cameras.<name>.ffmpeg.inputs.*
option_count: 2
source: options.html
---

# services.frigate.settings.cameras.<name>.ffmpeg.inputs.*

## services.frigate.settings.cameras.<name>.ffmpeg.inputs.*.path

Stream URL Type: string Example: "rtsp://192.0.2.1:554/rtsp" Declared by: <nixpkgs/nixos/modules/services/video/frigate.nix>

## services.frigate.settings.cameras.<name>.ffmpeg.inputs.*.roles

List of roles for this stream Type: list of (one of “audio”, “detect”, “record”) Example: [ "detect" "record" ] Declared by: <nixpkgs/nixos/modules/services/video/frigate.nix>
