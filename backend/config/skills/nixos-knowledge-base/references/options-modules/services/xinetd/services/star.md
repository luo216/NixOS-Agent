---
module: services.xinetd.services.*
option_count: 9
source: options.html
---

# services.xinetd.services.*

## services.xinetd.services.*.extraConfig

Extra configuration-lines added to the section of the service. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>

## services.xinetd.services.*.flags

Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>

## services.xinetd.services.*.name

Name of the service. Type: string Example: "login" Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>

## services.xinetd.services.*.port

Port number of the service. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Example: 123 Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>

## services.xinetd.services.*.protocol

Protocol of the service. Usually tcp or udp. Type: string Default: "tcp" Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>

## services.xinetd.services.*.server

Path of the program that implements the service. Type: string Example: "/foo/bin/ftpd" Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>

## services.xinetd.services.*.serverArgs

Command-line arguments for the server program. Type: strings concatenated with " " Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>

## services.xinetd.services.*.unlisted

Whether this server is listed in /etc/services. If so, the port number can be omitted. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>

## services.xinetd.services.*.user

User account for the service Type: string Default: "nobody" Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>
