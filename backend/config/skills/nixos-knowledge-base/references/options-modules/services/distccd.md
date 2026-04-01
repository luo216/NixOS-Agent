---
module: services.distccd
option_count: 10
source: options.html
---

# services.distccd

## services.distccd.enable

Whether to enable distccd, a distributed C/C++ compiler. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>

## services.distccd.package

The distcc package to use. Type: package Default: pkgs.distcc Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>

## services.distccd.allowedClients

Client IPs which are allowed to connect to distccd in CIDR notation. Anyone who can connect to the distccd server can run arbitrary commands on that system as the distcc user, therefore you should use this judiciously. Type: list of string Default: [ "127.0.0.1" ] Example: [ "127.0.0.1" "192.168.0.0/24" "10.0.0.0/24" ] Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>

## services.distccd.jobTimeout

Maximum duration, in seconds, of a single compilation request. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>

## services.distccd.logLevel

Set the minimum severity of error that will be included in the log file. Useful if you only want to see error messages rather than an entry for each connection. Type: null or one of “critical”, “error”, “warning”, “notice”, “info”, “debug” Default: "warning" Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>

## services.distccd.maxJobs

Maximum number of tasks distccd should execute at lib.any time. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>

## services.distccd.nice

Niceness of the compilation tasks. Type: null or integer between -20 and 19 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>

## services.distccd.openFirewall

Opens the specified TCP port for distcc. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>

## services.distccd.port

The TCP port which distccd will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3632 Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>

## services.distccd.zeroconf

Whether to register via mDNS/DNS-SD Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/development/distccd.nix>
