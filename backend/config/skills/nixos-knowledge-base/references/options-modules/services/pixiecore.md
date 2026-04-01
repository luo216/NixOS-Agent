---
module: services.pixiecore
option_count: 14
source: options.html
---

# services.pixiecore

## services.pixiecore.enable

Whether to enable Pixiecore. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.apiServer

URI to connect to the API. Ignored unless mode is set to ‘api’ Type: string Example: "http://localhost:8080" Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.cmdLine

Kernel commandline arguments. Ignored unless mode is set to ‘boot’ Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.debug

Log more things that aren’t directly related to booting a recognized client Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.dhcpNoBind

Handle DHCP traffic without binding to the DHCP server port Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.extraArguments

Additional command line arguments to pass to Pixiecore Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.initrd

Initrd path. Ignored unless mode is set to ‘boot’ Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.kernel

Kernel path. Ignored unless mode is set to ‘boot’ Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.listen

IPv4 address to listen on Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.mode

Which mode to use Type: one of “api”, “boot”, “quick” Default: "boot" Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.openFirewall

Open ports (67, 69, 4011 UDP and ‘port’, ‘statusPort’ TCP) in the firewall for Pixiecore. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.port

Port to listen on for HTTP Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 80 Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.quick

Which quick option to use Type: one of “arch”, “centos”, “coreos”, “debian”, “fedora”, “ubuntu”, “xyz” Default: "xyz" Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>

## services.pixiecore.statusPort

HTTP port for status information (can be the same as --port) Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 80 Declared by: <nixpkgs/nixos/modules/services/networking/pixiecore.nix>
