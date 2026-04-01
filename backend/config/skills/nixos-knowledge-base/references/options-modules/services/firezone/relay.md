---
module: services.firezone.relay
option_count: 13
source: options.html
---

# services.firezone.relay

## services.firezone.relay.enable

Whether to enable the firezone relay server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.enableTelemetry

Whether to enable telemetry. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.package

The firezone-relay package to use. Type: package Default: pkgs.firezone-relay Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.apiUrl

The URL of your firezone server’s API. This should be the same as your server’s setting for services.firezone.server.settings.api.externalUrl, but with wss:// instead of https://. Type: string matching the pattern ^wss://.+/$ Example: "wss://firezone.example.com/api/" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.highestPort

The highest port to use in TURN allocation Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 65535 Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.logLevel

The log level for the firezone application. See RUST_LOG for the format. Type: string Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.lowestPort

The lowest port to use in TURN allocation Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 49152 Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.name

The name of this gateway as shown in firezone Type: string Example: "My relay" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.openFirewall

Opens up the main STUN port and the TURN allocation range. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.port

The port to listen on for STUN messages Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3478 Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.publicIpv4

The public ipv4 address of this relay Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.publicIpv6

The public ipv6 address of this relay Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>

## services.firezone.relay.tokenFile

A file containing the firezone relay token. Do not use a nix-store path here as it will make the token publicly readable! This file will be passed via systemd credentials, it should only be accessible by the root user. Type: absolute path Example: "/run/secrets/firezone-relay-token" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/relay.nix>
