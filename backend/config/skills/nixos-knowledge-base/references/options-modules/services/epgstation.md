---
module: services.epgstation
option_count: 6
source: options.html
---

# services.epgstation

## services.epgstation.enable

Whether to enable EPGStation: DVR system for Mirakurun-managed TV tuners. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.package

The epgstation package to use. Type: package Default: pkgs.epgstation Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.ffmpeg

The ffmpeg package to use. Type: package Default: pkgs.ffmpeg-headless Example: ffmpeg-full Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.openFirewall

Open ports in the firewall for the EPGStation web interface. Warning Exposing EPGStation to the open internet is generally advised against. Only use it inside a trusted local network, or consider putting it behind a VPN if you want remote access. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.settings

Options to add to config.yml. Documentation: https://github.com/l3tnun/EPGStation/blob/master/doc/conf-manual.md Type: open submodule of (YAML 1.1 value) Default: { } Example: { conflictPriority = 10; recPriority = 20; } Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>

## services.epgstation.usePreconfiguredStreaming

Use preconfigured default streaming options. Upstream defaults: https://github.com/l3tnun/EPGStation/blob/master/config/config.yml.template Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/video/epgstation/default.nix>
