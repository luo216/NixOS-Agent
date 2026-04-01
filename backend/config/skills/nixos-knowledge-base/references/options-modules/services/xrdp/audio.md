---
module: services.xrdp.audio
option_count: 2
source: options.html
---

# services.xrdp.audio

## services.xrdp.audio.enable

Whether to enable audio support for xrdp sessions. So far it only works with PulseAudio sessions on the server side. No PipeWire support yet. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/xrdp.nix>

## services.xrdp.audio.package

The pulseaudio-module-xrdp package to use. Type: package Default: pkgs.pulseaudio-module-xrdp Declared by: <nixpkgs/nixos/modules/services/networking/xrdp.nix>
