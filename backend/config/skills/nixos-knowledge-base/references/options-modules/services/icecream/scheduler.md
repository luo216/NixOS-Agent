---
module: services.icecream.scheduler
option_count: 8
source: options.html
---

# services.icecream.scheduler

## services.icecream.scheduler.enable

Whether to enable Icecream Scheduler. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/icecream/scheduler.nix>

## services.icecream.scheduler.package

The icecream package to use. Type: package Default: pkgs.icecream Declared by: <nixpkgs/nixos/modules/services/networking/icecream/scheduler.nix>

## services.icecream.scheduler.extraArgs

Additional command line parameters Type: list of string Default: [ ] Example: [ "-v" ] Declared by: <nixpkgs/nixos/modules/services/networking/icecream/scheduler.nix>

## services.icecream.scheduler.netName

Network name for the icecream scheduler. Uses the default ICECREAM if null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/icecream/scheduler.nix>

## services.icecream.scheduler.openFirewall

Whether to automatically open the daemon port in the firewall. Type: boolean Declared by: <nixpkgs/nixos/modules/services/networking/icecream/scheduler.nix>

## services.icecream.scheduler.openTelnet

Whether to open the telnet TCP port on 8766. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/icecream/scheduler.nix>

## services.icecream.scheduler.persistentClientConnection

Whether to prevent clients from connecting to a better scheduler. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/icecream/scheduler.nix>

## services.icecream.scheduler.port

Server port to listen for icecream daemon requests. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8765 Declared by: <nixpkgs/nixos/modules/services/networking/icecream/scheduler.nix>
