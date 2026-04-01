---
module: services.headscale
option_count: 7
source: options.html
---

# services.headscale

## services.headscale.enable

Whether to enable headscale, Open Source coordination server for Tailscale. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.package

The headscale package to use. Type: package Default: pkgs.headscale Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.address

Listening address of headscale. Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.group

Group under which headscale runs. Note If left as the default value this group will automatically be created on system activation, otherwise you are responsible for ensuring the user exists before the headscale service starts. Type: string Default: "headscale" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.port

Listening port of headscale. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 443 Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings

Overrides to config.yaml as a Nix attribute set. Check the example config for possible options. Type: open submodule of (YAML 1.1 value) Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.user

User account under which headscale runs. Note If left as the default value this user will automatically be created on system activation, otherwise you are responsible for ensuring the user exists before the headscale service starts. Type: string Default: "headscale" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>
