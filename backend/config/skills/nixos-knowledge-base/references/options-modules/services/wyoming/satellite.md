---
module: services.wyoming.satellite
option_count: 8
source: options.html
---

# services.wyoming.satellite

## services.wyoming.satellite.enable

Whether to enable Wyoming Satellite. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/satellite.nix>

## services.wyoming.satellite.package

The wyoming-satellite package to use. Type: package Default: pkgs.wyoming-satellite Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/satellite.nix>

## services.wyoming.satellite.area

Area to the satellite. Type: null or string Default: null Example: "Kitchen" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/satellite.nix>

## services.wyoming.satellite.extraArgs

Extra arguments to pass to the executable. Check wyoming-satellite --help for possible options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/satellite.nix>

## services.wyoming.satellite.group

Group to run wyoming-satellite under. Type: string Default: "users" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/satellite.nix>

## services.wyoming.satellite.name

Name of the satellite. Type: string Default: config.networking.hostName Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/satellite.nix>

## services.wyoming.satellite.uri

URI where wyoming-satellite will bind its socket. Type: string Default: "tcp://0.0.0.0:10700" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/satellite.nix>

## services.wyoming.satellite.user

User to run wyoming-satellite under. Type: string Example: "alice" Declared by: <nixpkgs/nixos/modules/services/home-automation/wyoming/satellite.nix>
