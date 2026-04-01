---
module: services.moonraker
option_count: 11
source: options.html
---

# services.moonraker

## services.moonraker.enable

Whether to enable Moonraker, an API web server for Klipper. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/moonraker.nix>

## services.moonraker.package

The moonraker package to use. Type: null or package Default: pkgs.moonraker Example: moonraker.override { useGpiod = true; } Declared by: <nixpkgs/nixos/modules/services/misc/moonraker.nix>

## services.moonraker.address

The IP or host to listen on. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/moonraker.nix>

## services.moonraker.allowSystemControl

Whether to allow Moonraker to perform system-level operations. Moonraker exposes APIs to perform system-level operations, such as reboot, shutdown, and management of systemd units. See the documentation for details on what clients are able to do. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/moonraker.nix>

## services.moonraker.configDir

Deprecated directory containing client-writable configuration files. Clients will be able to edit files in this directory via the API. This directory must be writable. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/moonraker.nix>

## services.moonraker.group

Group account under which Moonraker runs. Type: string Default: "moonraker" Declared by: <nixpkgs/nixos/modules/services/misc/moonraker.nix>

## services.moonraker.klipperSocket

Path to Klipper’s API socket. Type: absolute path Default: config.services.klipper.apiSocket Declared by: <nixpkgs/nixos/modules/services/misc/moonraker.nix>

## services.moonraker.port

The port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7125 Declared by: <nixpkgs/nixos/modules/services/misc/moonraker.nix>

## services.moonraker.settings

Configuration for Moonraker. See the documentation for supported values. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them) Default: { } Example: { authorization = { cors_domains = [ "https://app.fluidd.xyz" "https://my.mainsail.xyz" ]; trusted_clients = [ "10.0.0.0/24" ]; }; } Declared by: <nixpkgs/nixos/modules/services/misc/moonraker.nix>

## services.moonraker.stateDir

The directory containing the Moonraker databases. Type: absolute path Default: "/var/lib/moonraker" Declared by: <nixpkgs/nixos/modules/services/misc/moonraker.nix>

## services.moonraker.user

User account under which Moonraker runs. Type: string Default: "moonraker" Declared by: <nixpkgs/nixos/modules/services/misc/moonraker.nix>
