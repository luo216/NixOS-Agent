---
module: hardware.alsa.defaultDevice
option_count: 2
source: options.html
---

# hardware.alsa.defaultDevice

## hardware.alsa.defaultDevice.capture

The default capture device (i.e. microphone). Leave empty to let ALSA pick the default automatically. Note The device can be changed at runtime by setting the ALSA_AUDIO_IN environment variables (but only before starting a program). Type: string Default: "" Example: "dsnoop:CARD=0,DEV=2" Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>

## hardware.alsa.defaultDevice.playback

The default playback device. Leave empty to let ALSA pick the default automatically. Note The device can be changed at runtime by setting the ALSA_AUDIO_OUT environment variables (but only before starting a program). Type: string Default: "" Example: "dmix:CARD=1,DEV=0" Declared by: <nixpkgs/nixos/modules/services/audio/alsa.nix>
