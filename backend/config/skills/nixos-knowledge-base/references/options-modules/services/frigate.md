---
module: services.frigate
option_count: 7
source: options.html
---

# services.frigate

## services.frigate.enable

Whether to enable Frigate NVR. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/frigate.nix>

## services.frigate.package

The frigate package to use. Type: package Default: pkgs.frigate Declared by: <nixpkgs/nixos/modules/services/video/frigate.nix>

## services.frigate.checkConfig

Whether to check the configuration at build time. Type: boolean Default: pkgs.stdenv.buildPlatform.canExecute pkgs.stdenv.hostPlatform && !(pkgs.stdenv.hostPlaform.isAarch64) Declared by: <nixpkgs/nixos/modules/services/video/frigate.nix>

## services.frigate.hostname

Hostname of the nginx vhost to configure. Only nginx is supported by upstream for direct reverse proxying. Type: string Example: "frigate.exampe.com" Declared by: <nixpkgs/nixos/modules/services/video/frigate.nix>

## services.frigate.preCheckConfig

This script gets run before the config is checked. It can be used to, e.g., set environment variables needed or transform the config (available as $out) to make it checkable in the sandbox. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/video/frigate.nix>

## services.frigate.settings

Frigate configuration as a nix attribute set. See the project documentation for how to configure frigate. Creating a config file Configuration reference Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/video/frigate.nix>

## services.frigate.vaapiDriver

Force usage of a particular VA-API driver for video acceleration. Use together with settings.ffmpeg.hwaccel_args. Setting this is not required for VA-API to work, but it can help steer VA-API towards the correct card if you have multiple. Note For VA-API to work you must enable hardware.graphics.enable (sufficient for AMDGPU) and pass for example pkgs.intel-media-driver (required for Intel 5th Gen. and newer) into hardware.graphics.extraPackages. See also: https://docs.frigate.video/configuration/hardware_acceleration https://docs.frigate.video/configuration/ffmpeg_presets#hwaccel-presets Type: null or one of “i965”, “iHD”, “nouveau”, “vdpau”, “nvidia”, “radeonsi” Default: null Example: "radeonsi" Declared by: <nixpkgs/nixos/modules/services/video/frigate.nix>
