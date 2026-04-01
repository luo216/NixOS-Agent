---
module: hardware.alsa.controls.<name>
option_count: 4
source: options.html
---

# hardware.alsa.controls.<name>

## hardware.alsa.controls.<name>.card

Name of the PCM card to control (slave). Type: string Default: "default" Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>

## hardware.alsa.controls.<name>.device

Name of the PCM device to control (slave). Type: string Default: "default" Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>

## hardware.alsa.controls.<name>.maxVolume

The maximum volume in dB. Type: floating point number Default: 0.0 Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>

## hardware.alsa.controls.<name>.name

Name of the control, as it appears in alsamixer. If null it will be the same as the softvol device name. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>
