---
module: services.sickbeard
option_count: 7
source: options.html
---

# services.sickbeard

## services.sickbeard.enable

Whether to enable the sickbeard server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/sickbeard.nix>

## services.sickbeard.package

The sickbeard package to use. Enable pkgs.sickrage or pkgs.sickgear as an alternative to SickBeard Type: package Default: pkgs.sickbeard Example: sickrage Declared by: <nixpkgs/nixos/modules/services/misc/sickbeard.nix>

## services.sickbeard.configFile

Path to config file. Type: absolute path Default: "${config.services.sickbeard.dataDir}/config.ini" Declared by: <nixpkgs/nixos/modules/services/misc/sickbeard.nix>

## services.sickbeard.dataDir

Path where to store data files. Type: absolute path Default: "/var/lib/sickbeard" Declared by: <nixpkgs/nixos/modules/services/misc/sickbeard.nix>

## services.sickbeard.group

Group to run the service as Type: string Default: "sickbeard" Declared by: <nixpkgs/nixos/modules/services/misc/sickbeard.nix>

## services.sickbeard.port

Port to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8081 Declared by: <nixpkgs/nixos/modules/services/misc/sickbeard.nix>

## services.sickbeard.user

User to run the service as Type: string Default: "sickbeard" Declared by: <nixpkgs/nixos/modules/services/misc/sickbeard.nix>
