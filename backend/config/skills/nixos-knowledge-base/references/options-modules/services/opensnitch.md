---
module: services.opensnitch
option_count: 4
source: options.html
---

# services.opensnitch

## services.opensnitch.enable

Whether to enable Opensnitch application firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>

## services.opensnitch.package

The opensnitch package to use. Type: package Default: pkgs.opensnitch Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>

## services.opensnitch.rules

Declarative configuration of firewall rules. All rules will be stored in /var/lib/opensnitch/rules by default. Rules path can be configured with settings.Rules.Path. See upstream documentation for available options. Type: open submodule of (JSON value) Default: { } Example: { "tor" = { "name" = "tor"; "enabled" = true; "action" = "allow"; "duration" = "always"; "operator" = { "type" ="simple"; "sensitive" = false; "operand" = "process.path"; "data" = "${lib.getBin pkgs.tor}/bin/tor"; }; }; }; Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>

## services.opensnitch.settings

opensnitchd configuration. Refer to upstream documentation for details on supported values. Type: open submodule of (JSON value) Declared by: <nixpkgs/nixos/modules/services/security/opensnitch.nix>
