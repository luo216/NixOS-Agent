---
module: services.deconz
option_count: 11
source: options.html
---

# services.deconz

## services.deconz.enable

Whether to enable deCONZ, a Zigbee gateway for use with ConBee/RaspBee hardware (https://phoscon.de/). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/deconz.nix>

## services.deconz.package

The deconz package to use. Type: package Default: pkgs.deconz Declared by: <nixpkgs/nixos/modules/services/networking/deconz.nix>

## services.deconz.allowRebootSystem

Whether to enable rebooting the system. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/deconz.nix>

## services.deconz.allowRestartService

Whether to enable killing/restarting processes. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/deconz.nix>

## services.deconz.allowSetSystemTime

Whether to enable setting the system time. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/deconz.nix>

## services.deconz.device

Force deCONZ to use a specific USB device (e.g. /dev/ttyACM0). By default it does a search. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/deconz.nix>

## services.deconz.extraArgs

Extra command line arguments for deCONZ, see https://github.com/dresden-elektronik/deconz-rest-plugin/wiki/deCONZ-command-line-parameters. Type: list of string Default: [ ] Example: [ "--dbg-info=1" "--dbg-err=2" ] Declared by: <nixpkgs/nixos/modules/services/networking/deconz.nix>

## services.deconz.httpPort

TCP port for the web server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 80 Declared by: <nixpkgs/nixos/modules/services/networking/deconz.nix>

## services.deconz.listenAddress

Pin deCONZ to the network interface specified through the provided IP address. This applies for the webserver as well as the websocket notifications. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/deconz.nix>

## services.deconz.openFirewall

Whether to enable opening up the service ports in the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/deconz.nix>

## services.deconz.wsPort

TCP port for the WebSocket. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 443 Declared by: <nixpkgs/nixos/modules/services/networking/deconz.nix>
