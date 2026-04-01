---
module: services.openvpn.servers.<name>
option_count: 6
source: options.html
---

# services.openvpn.servers.<name>

## services.openvpn.servers.<name>.authUserPass

This option can be used to store the username / password credentials with the “auth-user-pass” authentication method. You can either provide an attribute set of username and password, or the path to a file containing the credentials on two lines. WARNING: If you use an attribute set, this option will put the credentials WORLD-READABLE into the Nix store! Type: null or (optionally newline-terminated) single-line string or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/openvpn.nix>

## services.openvpn.servers.<name>.autoStart

Whether this OpenVPN instance should be started automatically. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/openvpn.nix>

## services.openvpn.servers.<name>.config

Configuration of this OpenVPN instance. See openvpn(8) for details. To import an external config file, use the following definition: config = "config /path/to/config.ovpn" Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/networking/openvpn.nix>

## services.openvpn.servers.<name>.down

Shell commands executed when the instance is shutting down. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/openvpn.nix>

## services.openvpn.servers.<name>.up

Shell commands executed when the instance is starting. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/openvpn.nix>

## services.openvpn.servers.<name>.updateResolvConf

Use the script from the update-resolv-conf package to automatically update resolv.conf with the DNS information provided by openvpn. The script will be run after the “up” commands and before the “down” commands. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/openvpn.nix>
