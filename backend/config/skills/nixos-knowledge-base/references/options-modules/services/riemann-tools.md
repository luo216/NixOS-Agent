---
module: services.riemann-tools
option_count: 3
source: options.html
---

# services.riemann-tools

## services.riemann-tools.enableHealth

Enable the riemann-health daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann-tools.nix>

## services.riemann-tools.extraArgs

A list of commandline-switches forwarded to a riemann-tool. See for example riemann-health --help for available options. Type: list of string Default: [ ] Example: [ "-p 5555" "--timeout=30" "--attribute=myattribute=42" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann-tools.nix>

## services.riemann-tools.riemannHost

Address of the host riemann node. Defaults to localhost. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann-tools.nix>
