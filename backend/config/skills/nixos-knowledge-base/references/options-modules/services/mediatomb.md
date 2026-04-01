---
module: services.mediatomb
option_count: 17
source: options.html
---

# services.mediatomb

## services.mediatomb.enable

Whether to enable the Gerbera/Mediatomb DLNA server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.package

The gerbera package to use. Type: package Default: pkgs.gerbera Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.customCfg

Allow the service to create and use its own config file inside the dataDir as configured by services.mediatomb.dataDir. Deactivated by default, the service then runs with the configuration generated from this module. Otherwise, when enabled, no service configuration is generated. Gerbera/Mediatomb then starts using config.xml within the configured dataDir. It’s up to the user to make a correct configuration file. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.dataDir

The directory where Gerbera/Mediatomb stores its state, data, etc. Type: absolute path Default: "/var/lib/${config.services.mediatomb.package.pname}" Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.dsmSupport

Whether to enable D-Link DSM 320 specific tweaks. WARNING: incompatible with ps3 support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.group

Group account under which the service runs. Type: string Default: "mediatomb" Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.interface

A specific interface to bind to. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.mediaDirectories

Declare media directories to index. Type: list of (submodule) Default: [ ] Example: [ { hidden-files = false; path = "/data/pictures"; recursive = false; } { hidden-files = false; path = "/data/audio"; recursive = true; } ] Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.openFirewall

If false (the default), this is up to the user to declare the firewall rules. If true, this opens port 1900 (tcp and udp) and the port specified by sercvices.mediatomb.port. If the option services.mediatomb.interface is set, the firewall rules opened are dedicated to that interface. Otherwise, those rules are opened globally. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.pcDirectoryHide

Whether to list the top-level directory or not (from upnp client standpoint). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.port

The network port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 49152 Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.ps3Support

Whether to enable ps3 specific tweaks. WARNING: incompatible with DSM 320 support. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.serverName

How to identify the server on the network. Type: string Default: "Gerbera (Mediatomb)" Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.tg100Support

Whether to enable Telegent TG100 specific tweaks. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.transcoding

Whether to enable transcoding. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.user

User account under which the service runs. Type: string Default: "mediatomb" Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>

## services.mediatomb.uuid

A unique (on your network) to identify the server by. Type: string Default: "fdfc8a4e-a3ad-4c1d-b43d-a2eedb03a687" Declared by: <nixpkgs/nixos/modules/services/misc/mediatomb.nix>
