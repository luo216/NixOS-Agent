---
module: services.crowdsec.settings
option_count: 5
source: options.html
---

# services.crowdsec.settings

## services.crowdsec.settings.capi

CAPI Configuration attributes Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.settings.console

Console Configuration attributes Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.settings.general

Settings for the main CrowdSec configuration file. Refer to the defaults at https://github.com/crowdsecurity/crowdsec/blob/master/config/config.yaml. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.settings.lapi

LAPI Configuration attributes Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>

## services.crowdsec.settings.simulation

Attributes inside the simulation.yaml file. Type: YAML 1.1 value Default: { simulation = false; } Declared by: <nixpkgs/nixos/modules/services/security/crowdsec.nix>
