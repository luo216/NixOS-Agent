---
module: services.karma
option_count: 7
source: options.html
---

# services.karma

## services.karma.enable

Whether to enable the Karma dashboard service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/karma.nix>

## services.karma.package

The karma package to use. Type: package Default: pkgs.karma Declared by: <nixpkgs/nixos/modules/services/monitoring/karma.nix>

## services.karma.configFile

A YAML config file which can be used to configure karma instead of the nix-generated file. Type: absolute path Default: "A configuration file generated from the provided nix attributes settings option." Example: "/etc/karma/karma.conf" Declared by: <nixpkgs/nixos/modules/services/monitoring/karma.nix>

## services.karma.environment

Additional environment variables to provide to karma. Type: attribute set of string Default: { } Example: { ALERTMANAGER_NAME = "single"; ALERTMANAGER_URI = "https://alertmanager.example.com"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/karma.nix>

## services.karma.extraOptions

Extra command line options. Type: list of string Default: [ ] Example: [ "--alertmanager.timeout 10s" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/karma.nix>

## services.karma.openFirewall

Whether to open ports in the firewall needed for karma to function. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/karma.nix>

## services.karma.settings

Karma dashboard configuration as nix attributes. Reference: https://github.com/prymitive/karma/blob/main/docs/CONFIGURATION.md Type: open submodule of (YAML 1.1 value) Default: { listen = { address = "127.0.0.1"; }; } Example: { alertmanager = { interval = "15s"; servers = [ { name = "prod"; uri = "http://alertmanager.example.com"; } ]; }; listen = { address = "192.168.1.4"; port = "8000"; prefix = "/dashboard"; }; } Declared by: <nixpkgs/nixos/modules/services/monitoring/karma.nix>
