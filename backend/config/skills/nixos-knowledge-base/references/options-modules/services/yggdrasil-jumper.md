---
module: services.yggdrasil-jumper
option_count: 9
source: options.html
---

# services.yggdrasil-jumper

## services.yggdrasil-jumper.enable

Whether to enable the Yggdrasil Jumper system service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil-jumper.nix>

## services.yggdrasil-jumper.package

The yggdrasil-jumper package to use. Type: package Default: pkgs.yggdrasil-jumper Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil-jumper.nix>

## services.yggdrasil-jumper.appendListenAddresses

Append Yggdrasil router configuration with listeners on loopback addresses (127.0.0.1) and preselected ports to support peering using client-server protocols like quic and tls. See Listen option in Yggdrasil router configuration. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil-jumper.nix>

## services.yggdrasil-jumper.detectWireguard

Control whether settings.wireguard = true should automatically provide CAP_NET_ADMIN capability and make the necessary packages available to Yggdrasil Jumper service. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil-jumper.nix>

## services.yggdrasil-jumper.extraArgs

Extra command line arguments for Yggdrasil Jumper. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil-jumper.nix>

## services.yggdrasil-jumper.extraConfig

Configuration for Yggdrasil Jumper in plaintext. Type: strings concatenated with “\n” Default: "" Example: '' listen_port = 9999; whitelist = [ "<IPv6 address of a remote node>" ]; '' Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil-jumper.nix>

## services.yggdrasil-jumper.logLevel

Set logging verbosity for Yggdrasil Jumper. Type: one of “off”, “error”, “warn”, “info”, “debug”, “trace” Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil-jumper.nix>

## services.yggdrasil-jumper.retrieveListenAddresses

Automatically retrieve listen addresses from the Yggdrasil router configuration. See yggdrasil_listen option in Yggdrasil Jumper configuration. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil-jumper.nix>

## services.yggdrasil-jumper.settings

Configuration for Yggdrasil Jumper as a Nix attribute set. Type: TOML value Default: { } Example: { listen_port = 9999; whitelist = [ "<IPv6 address of a remote node>" ]; wireguard = true; } Declared by: <nixpkgs/nixos/modules/services/networking/yggdrasil-jumper.nix>
