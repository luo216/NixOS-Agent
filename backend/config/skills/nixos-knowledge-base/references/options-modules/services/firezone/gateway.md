---
module: services.firezone.gateway
option_count: 7
source: options.html
---

# services.firezone.gateway

## services.firezone.gateway.enable

Whether to enable the firezone gateway. You have to manually masquerade and forward traffic from the tun-firezone interface to your resource! Refer to the upstream setup script for a list of iptable commands. See the firezone nixos test in this repository for an nftables based example. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gateway.nix>

## services.firezone.gateway.enableTelemetry

Whether to enable telemetry. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gateway.nix>

## services.firezone.gateway.package

The firezone-gateway package to use. Type: package Default: pkgs.firezone-gateway Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gateway.nix>

## services.firezone.gateway.apiUrl

The URL of your firezone server’s API. This should be the same as your server’s setting for services.firezone.server.settings.api.externalUrl, but with wss:// instead of https://. Type: string matching the pattern ^wss://.+/$ Example: "wss://firezone.example.com/api/" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gateway.nix>

## services.firezone.gateway.logLevel

The log level for the firezone application. See RUST_LOG for the format. Type: string Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gateway.nix>

## services.firezone.gateway.name

The name of this gateway as shown in firezone Type: string Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gateway.nix>

## services.firezone.gateway.tokenFile

A file containing the firezone gateway token. Do not use a nix-store path here as it will make the token publicly readable! This file will be passed via systemd credentials, it should only be accessible by the root user. Type: absolute path Example: "/run/secrets/firezone-gateway-token" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/gateway.nix>
