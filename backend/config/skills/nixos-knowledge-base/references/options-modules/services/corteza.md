---
module: services.corteza
option_count: 8
source: options.html
---

# services.corteza

## services.corteza.enable

Whether to enable Corteza, a low-code platform. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/corteza.nix>

## services.corteza.package

The corteza package to use. Type: package Default: pkgs.corteza Declared by: <nixpkgs/nixos/modules/services/development/corteza.nix>

## services.corteza.address

IP for the HTTP server. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/development/corteza.nix>

## services.corteza.group

The group to run Corteza under. Type: string Default: "corteza" Declared by: <nixpkgs/nixos/modules/services/development/corteza.nix>

## services.corteza.openFirewall

Whether to open ports in the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/corteza.nix>

## services.corteza.port

Port for the HTTP server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 80 Declared by: <nixpkgs/nixos/modules/services/development/corteza.nix>

## services.corteza.settings

Configuration for Corteza, will be passed as environment variables. See https://docs.cortezaproject.org/corteza-docs/2024.9/devops-guide/references/configuration/server.html. Type: open submodule of attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/development/corteza.nix>

## services.corteza.user

The user to run Corteza under. Type: string Default: "corteza" Declared by: <nixpkgs/nixos/modules/services/development/corteza.nix>
