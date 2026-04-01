---
module: services.cockpit
option_count: 7
source: options.html
---

# services.cockpit

## services.cockpit.enable

Whether to enable Cockpit. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/cockpit.nix>

## services.cockpit.package

The Cockpit package to use. Type: package Default: pkgs.cockpit Declared by: <nixpkgs/nixos/modules/services/monitoring/cockpit.nix>

## services.cockpit.allowed-origins

List of allowed origins. Maps to the WebService.Origins setting and allows merging from multiple modules. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/cockpit.nix>

## services.cockpit.openFirewall

Open port for cockpit. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/cockpit.nix>

## services.cockpit.port

Port where cockpit will listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9090 Declared by: <nixpkgs/nixos/modules/services/monitoring/cockpit.nix>

## services.cockpit.settings

Settings for cockpit that will be saved in /etc/cockpit/cockpit.conf. See the documentation, that is also available with man cockpit.conf.5 for details. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/cockpit.nix>

## services.cockpit.showBanner

Whether to add the Cockpit banner to the issue and motd files. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/monitoring/cockpit.nix>
