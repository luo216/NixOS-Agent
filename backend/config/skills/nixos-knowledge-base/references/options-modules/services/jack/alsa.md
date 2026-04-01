---
module: services.jack.alsa
option_count: 2
source: options.html
---

# services.jack.alsa

## services.jack.alsa.enable

Route audio to/from generic ALSA-using applications using ALSA JACK PCM plugin. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/audio/jack.nix>

## services.jack.alsa.support32Bit

Whether to support sound for 32-bit ALSA applications on 64-bit system. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/jack.nix>
