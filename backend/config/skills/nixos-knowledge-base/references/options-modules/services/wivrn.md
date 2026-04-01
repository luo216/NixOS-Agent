---
module: services.wivrn
option_count: 8
source: options.html
---

# services.wivrn

## services.wivrn.enable

Whether to enable WiVRn, an OpenXR streaming application. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>

## services.wivrn.package

The wivrn package to use. Type: package Default: pkgs.wivrn Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>

## services.wivrn.autoStart

Whether to enable starting the service by default. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>

## services.wivrn.defaultRuntime

Whether to enable WiVRn as the default OpenXR runtime on the system. The config can be found at /etc/xdg/openxr/1/active_runtime.json. Note that applications can bypass this option by setting an active runtime in a writable XDG_CONFIG_DIRS location like ~/.config . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>

## services.wivrn.extraServerFlags

Flags to add to the wivrn service. Type: list of string Default: [ ] Example: [ "--no-publish-service" ] Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>

## services.wivrn.highPriority

Whether to enable high priority capability for asynchronous reprojection. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>

## services.wivrn.monadoEnvironment

Environment variables to be passed to the Monado environment. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>

## services.wivrn.openFirewall

Whether to enable the default ports in the firewall for the WiVRn server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/wivrn.nix>
