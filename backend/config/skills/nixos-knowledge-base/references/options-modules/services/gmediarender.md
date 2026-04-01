---
module: services.gmediarender
option_count: 8
source: options.html
---

# services.gmediarender

## services.gmediarender.enable

Whether to enable the gmediarender DLNA renderer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/gmediarender.nix>

## services.gmediarender.package

The gmediarender package to use. Type: package Default: pkgs.gmrender-resurrect Declared by: <nixpkgs/nixos/modules/services/audio/gmediarender.nix>

## services.gmediarender.audioDevice

The audio device to use. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/audio/gmediarender.nix>

## services.gmediarender.audioSink

The audio sink to use. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/audio/gmediarender.nix>

## services.gmediarender.friendlyName

A “friendly name” for identifying the endpoint. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/audio/gmediarender.nix>

## services.gmediarender.initialVolume

A default volume attenuation (in dB) for the endpoint. Type: null or signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/services/audio/gmediarender.nix>

## services.gmediarender.port

Port that will be used to accept client connections. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/audio/gmediarender.nix>

## services.gmediarender.uuid

A UUID for uniquely identifying the endpoint. If you have multiple renderers on your network, you MUST set this. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/audio/gmediarender.nix>
