---
module: services.pipewire
option_count: 7
source: options.html
---

# services.pipewire

## services.pipewire.enable

Whether to enable PipeWire service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/pipewire.nix>

## services.pipewire.package

The pipewire package to use. Type: package Default: pkgs.pipewire Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/pipewire.nix>

## services.pipewire.configPackages

List of packages that provide PipeWire configuration, in the form of share/pipewire/*/*.conf files. LV2 dependencies will be picked up from config packages automatically via passthru.requiredLv2Packages. Type: list of package Default: [ ] Example: [ (pkgs.writeTextDir "share/pipewire/pipewire.conf.d/10-loopback.conf" '' context.modules = [ { name = libpipewire-module-loopback args = { node.description = "Scarlett Focusrite Line 1" capture.props = { audio.position = [ FL ] stream.dont-remix = true node.target = "alsa_input.usb-Focusrite_Scarlett_Solo_USB_Y7ZD17C24495BC-00.analog-stereo" node.passive = true } playback.props = { node.name = "SF_mono_in_1" media.class = "Audio/Source" audio.position = [ MONO ] } } } ] '') ] Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/pipewire.nix>

## services.pipewire.extraLv2Packages

List of packages that provide LV2 plugins in lib/lv2 that should be made available to PipeWire for filter chains. Config packages have their required LV2 plugins added automatically, so they don’t need to be specified here. Config packages need to set passthru.requiredLv2Packages for this to work. Type: list of package Default: [ ] Example: [ pkgs.lsp-plugins ] Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/pipewire.nix>

## services.pipewire.raopOpenFirewall

Opens UDP/6001-6002, required by RAOP/Airplay for timing and control data. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/pipewire.nix>

## services.pipewire.socketActivation

Automatically run PipeWire when connections are made to the PipeWire socket. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/pipewire.nix>

## services.pipewire.systemWide

If true, a system-wide PipeWire service and socket is enabled allowing all users in the “pipewire” group to use it simultaneously. If false, then user units are used instead, restricting access to only one user. Enabling system-wide PipeWire is however not recommended and disabled by default according to https://github.com/PipeWire/pipewire/blob/master/NEWS Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/desktops/pipewire/pipewire.nix>
