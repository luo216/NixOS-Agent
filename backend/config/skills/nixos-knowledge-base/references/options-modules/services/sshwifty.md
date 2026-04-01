---
module: services.sshwifty
option_count: 5
source: options.html
---

# services.sshwifty

## services.sshwifty.enable

Whether to enable Sshwifty. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/sshwifty.nix>

## services.sshwifty.package

The sshwifty package to use. Type: package Default: pkgs.sshwifty Declared by: <nixpkgs/nixos/modules/services/web-apps/sshwifty.nix>

## services.sshwifty.settings

Configuration for Sshwifty. See the Sshwifty documentation for possible options. Type: JSON value Declared by: <nixpkgs/nixos/modules/services/web-apps/sshwifty.nix>

## services.sshwifty.sharedKeyFile

Path to a file containing the shared key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/sshwifty.nix>

## services.sshwifty.socks5PasswordFile

Path to a file containing the SOCKS5 password. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/sshwifty.nix>
