---
module: services.icecream.daemon
option_count: 13
source: options.html
---

# services.icecream.daemon

## services.icecream.daemon.enable

Whether to enable Icecream Daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.package

The icecream package to use. Type: package Default: pkgs.icecream Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.cacheLimit

Maximum size in Megabytes of cache used to store compile environments of compile clients. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 256 Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.extraArgs

Additional command line parameters. Type: list of string Default: [ ] Example: [ "-v" ] Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.hostname

Hostname of the daemon in the icecream infrastructure. Uses the hostname retrieved via uname if set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.maxProcesses

Maximum number of compile jobs started in parallel for this daemon. Uses the number of CPUs if set to null. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.netName

Network name to connect to. A scheduler with the same name needs to be running. Type: string Default: "ICECREAM" Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.nice

The level of niceness to use. Type: integer between -20 and 19 (both inclusive) Default: 5 Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.noRemote

Prevent jobs from other nodes being scheduled on this daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.openBroadcast

Whether to automatically open the firewall for scheduler discovery. Type: boolean Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.openFirewall

Whether to automatically open receive port in the firewall. Type: boolean Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.schedulerHost

Explicit scheduler hostname, useful in firewalled environments. Uses scheduler autodiscovery via broadcast if set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>

## services.icecream.daemon.user

User to run the icecream daemon as. Set to root to enable receive of remote compile environments. Type: string Default: "icecc" Declared by: <nixpkgs/nixos/modules/services/networking/icecream/daemon.nix>
