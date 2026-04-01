---
module: services.ebusd
option_count: 8
source: options.html
---

# services.ebusd

## services.ebusd.enable

Whether to enable ebusd, a daemon for communication with eBUS heating systems. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.package

The ebusd package to use. Type: package Default: pkgs.ebusd Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.configpath

Directory to read CSV config files from. This can be a local folder or a URL. Type: string Default: "https://ebus.github.io/" Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.device

Use DEV as eBUS device [/dev/ttyUSB0]. This can be either: enh:DEVICE or enh:IP:PORT for enhanced device (only adapter v3 and newer), ens:DEVICE for enhanced high speed serial device (only adapter v3 and newer with firmware since 20220731), DEVICE for serial device (normal speed, for all other serial adapters like adapter v2 as well as adapter v3 in non-enhanced mode), or [udp:]IP:PORT for network device. Source: https://github.com/john30/ebusd/wiki/2.-Run#device-options Type: string Default: "" Example: "IP:PORT" Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.extraArguments

Extra arguments to the ebus daemon Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.port

The port on which to listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8888 Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.readonly

Only read from device, never write to it Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.scanconfig

Pick CSV config files matching initial scan (“none” or empty for no initial scan message, “full” for full scan, or a single hex address to scan, default is to send a broadcast ident message). If combined with --checkconfig, you can add scan message data as arguments for checking a particular scan configuration, e.g. “FF08070400/0AB5454850303003277201”. For further details on this option, see Automatic configuration. Type: string Default: "full" Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>
