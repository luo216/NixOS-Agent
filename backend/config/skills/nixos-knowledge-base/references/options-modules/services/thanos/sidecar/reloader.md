---
module: services.thanos.sidecar.reloader
option_count: 3
source: options.html
---

# services.thanos.sidecar.reloader

## services.thanos.sidecar.reloader.config-envsubst-file

Output file for environment variable substituted config file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.sidecar.reloader.config-file

Config file watched by the reloader. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.sidecar.reloader.rule-dirs

Rule directories for the reloader to refresh. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
