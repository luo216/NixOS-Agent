---
module: services.wyoming.satellite.microphone
option_count: 3
source: options.html
---

# services.wyoming.satellite.microphone

## services.wyoming.satellite.microphone.autoGain

Automatic gain control in dbFS, with 31 being the loudest value. Set to 0 to disable. Type: integer between 0 and 31 (both inclusive) Default: 5 Example: 15 Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/satellite.nix>

## services.wyoming.satellite.microphone.command

Program to run for audio input. Type: string Default: "arecord -r 16000 -c 1 -f S16_LE -t raw" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/satellite.nix>

## services.wyoming.satellite.microphone.noiseSuppression

Noise suppression level with 4 being the maximum suppression, which may cause audio distortion. Set to 0 to disable. Type: integer between 0 and 4 (both inclusive) Default: 2 Example: 3 Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/satellite.nix>
