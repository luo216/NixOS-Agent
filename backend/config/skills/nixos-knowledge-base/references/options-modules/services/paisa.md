---
module: services.paisa
option_count: 7
source: options.html
---

# services.paisa

## services.paisa.enable

Whether to enable Paisa personal finance manager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/paisa.nix>

## services.paisa.package

The paisa package to use. Type: package Default: pkgs.paisa Declared by: <nixpkgs/nixos/modules/services/misc/paisa.nix>

## services.paisa.host

Host bind IP address. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/paisa.nix>

## services.paisa.mutableSettings

Allow changes made on the web interface to persist between service restarts. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/paisa.nix>

## services.paisa.openFirewall

Open ports in the firewall for the Paisa web server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/paisa.nix>

## services.paisa.port

Port to serve Paisa on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 7500 Declared by: <nixpkgs/nixos/modules/services/misc/paisa.nix>

## services.paisa.settings

Paisa configuration. Please refer to https://paisa.fyi/reference/config/ for details. On start and if mutableSettings is true, these options are merged into the configuration file on start, taking precedence over configuration changes made on the web interface. Type: null or (open submodule of (YAML 1.1 value)) Default: null Declared by: <nixpkgs/nixos/modules/services/misc/paisa.nix>
