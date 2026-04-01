---
module: services.ddclient
option_count: 19
source: options.html
---

# services.ddclient

## services.ddclient.enable

Whether to synchronise your machine’s IP address with a dynamic DNS provider (e.g. dyndns.org). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.package

The ddclient executable package run by the service. Type: package Default: pkgs.ddclient Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.configFile

Path to configuration file. When set this overrides the generated configuration from module options. Type: null or absolute path Default: null Example: "/root/nixos/secrets/ddclient.conf" Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.domains

Domain name(s) to synchronize. Type: list of string Default: [ "" ] Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.extraConfig

Extra configuration. Contents will be added verbatim to the configuration file. Note daemon should not be added here because it does not work great with the systemd-timer approach the service uses. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.interval

The interval at which to run the check and update. See man 7 systemd.time for the format. Type: string Default: "10min" Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.passwordFile

A file containing the password or a TSIG key in named format when using the nsupdate protocol. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.protocol

Protocol to use with dynamic DNS provider (see https://ddclient.net/protocols.html ). Type: string Default: "dyndns2" Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.quiet

Print no messages for unnecessary updates. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.script

script as required by some providers. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.secretsFile

A file containing the secrets for the dynamic DNS provider. This file should contain lines of valid secrets in the format specified by the ddclient documentation. If this option is set, it overrides the passwordFile option. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.server

Server address. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.ssl

Whether to use SSL/TLS to connect to dynamic DNS provider. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.use

Method to determine the IP address to send to the dynamic DNS provider. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.username

User name. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.usev4

Method to determine the IPv4 address to send to the dynamic DNS provider. Only used if use is not set. Type: string Default: "webv4, webv4=ipify-ipv4" Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.usev6

Method to determine the IPv6 address to send to the dynamic DNS provider. Only used if use is not set. Type: string Default: "webv6, webv6=ipify-ipv6" Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.verbose

Print verbose information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>

## services.ddclient.zone

zone as required by some providers. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/ddclient.nix>
