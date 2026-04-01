---
module: services.pipewire.extraConfig
option_count: 4
source: options.html
---

# services.pipewire.extraConfig

## services.pipewire.extraConfig.client

Additional configuration for the PipeWire client library, used by most applications. Every item in this attrset becomes a separate drop-in file in /etc/pipewire/client.conf.d. See the PipeWire wiki for examples. Type: attribute set of (JSON value) Default: { } Example: { "10-no-resample" = { "stream.properties" = { "resample.disable" = true; }; }; } Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/pipewire.nix>

## services.pipewire.extraConfig.jack

Additional configuration for the PipeWire JACK server and client library. Every item in this attrset becomes a separate drop-in file in /etc/pipewire/jack.conf.d. See the PipeWire wiki for examples. Type: attribute set of (JSON value) Default: { } Example: { "20-hide-midi" = { "jack.properties" = { "jack.show-midi" = false; }; }; } Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/pipewire.nix>

## services.pipewire.extraConfig.pipewire

Additional configuration for the PipeWire server. Every item in this attrset becomes a separate drop-in file in /etc/pipewire/pipewire.conf.d. See man pipewire.conf for details, and the PipeWire wiki for examples. See also: PipeWire wiki - virtual devices for creating virtual devices or remapping channels PipeWire wiki - filter-chain for creating more complex processing pipelines PipeWire wiki - network for streaming audio over a network Type: attribute set of (JSON value) Default: { } Example: { "10-clock-rate" = { "context.properties" = { "default.clock.rate" = 44100; }; }; "11-no-upmixing" = { "stream.properties" = { "channelmix.upmix" = false; }; }; } Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/pipewire.nix>

## services.pipewire.extraConfig.pipewire-pulse

Additional configuration for the PipeWire PulseAudio server. Every item in this attrset becomes a separate drop-in file in /etc/pipewire/pipewire-pulse.conf.d. See man pipewire-pulse.conf for details, and the PipeWire wiki for examples. See also: PipeWire wiki - PulseAudio tricks guide for more examples. Type: attribute set of (JSON value) Default: { } Example: { "15-force-s16-info" = { "pulse.rules" = [ { actions = { quirks = [ "force-s16-info" ]; }; matches = [ { "application.process.binary" = "my-broken-app"; } ]; } ]; }; } Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/pipewire.nix>
