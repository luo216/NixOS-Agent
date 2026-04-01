---
module: services.evcc
option_count: 5
source: options.html
---

# services.evcc

## services.evcc.enable

Whether to enable EVCC, the extensible EV Charge Controller and Home Energy Management System. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/evcc.nix>

## services.evcc.package

The evcc package to use. Type: package Default: pkgs.evcc Declared by: <nixpkgs/nixos/modules/services/home-automation/evcc.nix>

## services.evcc.environmentFile

File with environment variables to pass into the runtime environment. Useful to pass secrets into the configuration, that get applied using envsubst. Type: null or absolute path Default: null Example: /run/keys/evcc Declared by: <nixpkgs/nixos/modules/services/home-automation/evcc.nix>

## services.evcc.extraArgs

Extra arguments to pass to the evcc executable. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/home-automation/evcc.nix>

## services.evcc.settings

evcc configuration as a Nix attribute set. Supports substitution of secrets using envsubst from the environmentFile. Check for possible options in the sample evcc.dist.yaml. Type: YAML 1.1 value Declared by: <nixpkgs/nixos/modules/services/home-automation/evcc.nix>
