---
module: services.beszel.hub
option_count: 7
source: options.html
---

# services.beszel.hub

## services.beszel.hub.enable

Whether to enable beszel hub. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-hub.nix>

## services.beszel.hub.package

The beszel package to use. Type: package Default: pkgs.beszel Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-hub.nix>

## services.beszel.hub.dataDir

Data directory of beszel-hub. Type: absolute path Default: "/var/lib/beszel-hub" Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-hub.nix>

## services.beszel.hub.environment

Environment variables passed to the systemd service. See https://www.beszel.dev/guide/environment-variables#hub for available options. Type: attribute set of string Default: { } Example: { DISABLE_PASSWORD_AUTH = "true"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-hub.nix>

## services.beszel.hub.environmentFile

Environment file to be passed to the systemd service. Useful for passing secrets to the service to prevent them from being world-readable in the Nix store. See systemd.exec(5). Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-hub.nix>

## services.beszel.hub.host

Host or address this beszel hub listens on. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-hub.nix>

## services.beszel.hub.port

Port for this beszel hub to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8090 Example: 3002 Declared by: <nixpkgs/nixos/modules/services/monitoring/beszel-hub.nix>
