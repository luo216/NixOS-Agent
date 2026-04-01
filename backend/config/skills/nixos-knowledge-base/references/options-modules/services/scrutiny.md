---
module: services.scrutiny
option_count: 4
source: options.html
---

# services.scrutiny

## services.scrutiny.enable

Whether to enable Scrutiny, a web application for drive monitoring. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.package

The scrutiny package to use. Type: package Default: pkgs.scrutiny Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.openFirewall

Whether to enable opening the default ports in the firewall for Scrutiny. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.settings

Scrutiny settings to be rendered into the configuration file. See https://github.com/AnalogJ/scrutiny/blob/master/example.scrutiny.yaml. Options containing secret data should be set to an attribute set containing the attribute _secret. This attribute should be a string or structured JSON with quote = false;, pointing to a file that contains the value the option should be set to. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>
