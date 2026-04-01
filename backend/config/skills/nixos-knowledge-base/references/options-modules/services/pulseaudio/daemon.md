---
module: services.pulseaudio.daemon
option_count: 2
source: options.html
---

# services.pulseaudio.daemon

## services.pulseaudio.daemon.config

Config of the pulse daemon. See man pulse-daemon.conf. Type: attribute set of unspecified value Default: { } Example: { realtime-scheduling = "yes"; } Declared by: <nixpkgs/nixos/modules/services/audio/pulseaudio.nix>

## services.pulseaudio.daemon.logLevel

The log level that the system-wide pulseaudio daemon should use, if activated. Type: string Default: "notice" Declared by: <nixpkgs/nixos/modules/services/audio/pulseaudio.nix>
