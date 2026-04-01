---
module: services.go-csp-collector
option_count: 3
source: options.html
---

# services.go-csp-collector

## services.go-csp-collector.enable

Whether to enable go-csp-collector, a content security policy violation collector. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/go-csp-collector.nix>

## services.go-csp-collector.package

The go-csp-collector package to use. Type: package Default: pkgs.go-csp-collector Declared by: <nixpkgs/nixos/modules/services/monitoring/go-csp-collector.nix>

## services.go-csp-collector.settings

Settings for go-csp-collector. See https://github.com/jacobbednarz/go-csp-collector for supported options. Type: open submodule of attribute set of (boolean or absolute path or string) Default: { } Example: { debug = true; health-check-path = "/health"; } Declared by: <nixpkgs/nixos/modules/services/monitoring/go-csp-collector.nix>
