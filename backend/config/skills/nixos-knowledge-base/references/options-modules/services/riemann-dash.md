---
module: services.riemann-dash
option_count: 3
source: options.html
---

# services.riemann-dash

## services.riemann-dash.enable

Enable the riemann-dash dashboard daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann-dash.nix>

## services.riemann-dash.config

Contents added to the end of the riemann-dash configuration file. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann-dash.nix>

## services.riemann-dash.dataDir

Location of the riemann-base dir. The dashboard configuration file is is stored to this directory. The directory is created automatically on service start, and owner is set to the riemanndash user. Type: string Default: "/var/riemann-dash" Declared by: <nixpkgs/nixos/modules/services/monitoring/riemann-dash.nix>
