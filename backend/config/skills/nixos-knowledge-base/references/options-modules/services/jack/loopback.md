---
module: services.jack.loopback
option_count: 5
source: options.html
---

# services.jack.loopback

## services.jack.loopback.enable

Create ALSA loopback device, instead of using PCM plugin. Has broader application support (things like Steam will work), but may need fine-tuning for concrete hardware. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/jack.nix>

## services.jack.loopback.config

ALSA config for loopback device. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/audio/jack.nix>

## services.jack.loopback.dmixConfig

For music production software that still doesn’t support JACK natively you would like to put buffer/period adjustments here to decrease dmix device latency. Type: strings concatenated with “\n” Default: "" Example: '' period_size 2048 periods 2 '' Declared by: <nixpkgs/nixos/modules/services/audio/jack.nix>

## services.jack.loopback.index

Index of an ALSA loopback device. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/audio/jack.nix>

## services.jack.loopback.session

Additional commands to run to setup loopback device. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/audio/jack.nix>
