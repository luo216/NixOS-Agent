---
module: services.tempo
option_count: 4
source: options.html
---

# services.tempo

## services.tempo.enable

Whether to enable Grafana Tempo. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/tracing/tempo.nix>

## services.tempo.configFile

Specify a path to a configuration file that Tempo should use. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/tracing/tempo.nix>

## services.tempo.extraFlags

Additional flags to pass to the ExecStart= in tempo.service. Type: list of string Default: [ ] Example: [ "-config.expand-env=true" ] Declared by: <nixpkgs/nixos/modules/services/tracing/tempo.nix>

## services.tempo.settings

Specify the configuration for Tempo in Nix. See https://grafana.com/docs/tempo/latest/configuration/ for available options. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/tracing/tempo.nix>
