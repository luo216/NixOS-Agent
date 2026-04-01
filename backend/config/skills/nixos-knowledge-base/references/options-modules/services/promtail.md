---
module: services.promtail
option_count: 4
source: options.html
---

# services.promtail

## services.promtail.enable

Whether to enable the Promtail ingresser. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/logging/promtail.nix>

## services.promtail.configFile

Config file path for Promtail. If this option is defined, the value of services.promtail.configuration will be ignored. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/logging/promtail.nix>

## services.promtail.configuration

Specify the configuration for Promtail in Nix. This option will be ignored if services.promtail.configFile is defined. Type: JSON value Declared by: <nixpkgs/nixos/modules/services/logging/promtail.nix>

## services.promtail.extraFlags

Specify a list of additional command line flags, which get escaped and are then passed to Loki. Type: list of string Default: [ ] Example: [ "--server.http-listen-port=3101" ] Declared by: <nixpkgs/nixos/modules/services/logging/promtail.nix>
