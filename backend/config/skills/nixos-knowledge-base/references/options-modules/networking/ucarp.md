---
module: networking.ucarp
option_count: 18
source: options.html
---

# networking.ucarp

## networking.ucarp.enable

Whether to enable ucarp, userspace implementation of CARP. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.package

The ucarp package to use. Please note that the default package, pkgs.ucarp, has not received any upstream updates for a long time and can be considered as unmaintained. Type: package Default: pkgs.ucarp Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.addr

Virtual shared IP address. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.advBase

Advertisement frequency in seconds. Type: unsigned integer, meaning >=0 Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.advSkew

Advertisement skew in seconds. Type: unsigned integer, meaning >=0 Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.deadratio

Ratio to consider a host as dead. Type: unsigned integer, meaning >=0 Default: 3 Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.downscript

Command to run after become backup, the interface name, virtual address and optional extra parameters are passed as arguments. Type: absolute path Example: pkgs.writeScript "downscript" '' #!/bin/sh ${pkgs.iproute2}/bin/ip addr del "$2"/24 dev "$1" ''; Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.extraParam

Extra parameter to pass to the up/down scripts. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.ignoreIfState

Ignore interface state, e.g., down or no carrier. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.interface

Network interface to bind to. Type: string Example: "eth0" Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.neutral

Do not run downscript at start if the host is the backup. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.noMcast

Use broadcast instead of multicast advertisements. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.passwordFile

File containing shared password between CARP hosts. Type: string Example: "/run/keys/ucarp-password" Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.preempt

Enable preemptive failover. Thus, this host becomes the CARP master as soon as possible. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.shutdown

Call downscript at exit. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.srcIp

Source (real) IP address of this host. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.upscript

Command to run after become master, the interface name, virtual address and optional extra parameters are passed as arguments. Type: absolute path Example: pkgs.writeScript "upscript" '' #!/bin/sh ${pkgs.iproute2}/bin/ip addr add "$2"/24 dev "$1" ''; Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>

## networking.ucarp.vhId

Virtual IP identifier shared between CARP hosts. Type: integer between 1 and 255 (both inclusive) Example: 1 Declared by: <nixpkgs/nixos/modules/services/networking/ucarp.nix>
