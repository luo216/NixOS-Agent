---
module: services.firezone.headless-client
option_count: 7
source: options.html
---

# services.firezone.headless-client

## services.firezone.headless-client.enable

Whether to enable the firezone headless client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/headless-client.nix>

## services.firezone.headless-client.enableTelemetry

Whether to enable telemetry. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/firezone/headless-client.nix>

## services.firezone.headless-client.package

The firezone-headless-client package to use. Type: package Default: pkgs.firezone-headless-client Declared by: <nixpkgs/nixos/modules/services/networking/firezone/headless-client.nix>

## services.firezone.headless-client.apiUrl

The URL of your firezone server’s API. This should be the same as your server’s setting for services.firezone.server.settings.api.externalUrl, but with wss:// instead of https://. Type: string matching the pattern ^wss://.+/$ Example: "wss://firezone.example.com/api/" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/headless-client.nix>

## services.firezone.headless-client.logLevel

The log level for the firezone application. See RUST_LOG for the format. Type: string Default: "info" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/headless-client.nix>

## services.firezone.headless-client.name

The name of this client as shown in firezone Type: string Declared by: <nixpkgs/nixos/modules/services/networking/firezone/headless-client.nix>

## services.firezone.headless-client.tokenFile

A file containing the firezone client token. Do not use a nix-store path here as it will make the token publicly readable! This file will be passed via systemd credentials, it should only be accessible by the root user. Type: absolute path Example: "/run/secrets/firezone-client-token" Declared by: <nixpkgs/nixos/modules/services/networking/firezone/headless-client.nix>
