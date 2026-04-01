---
module: services.glances
option_count: 5
source: options.html
---

# services.glances

## services.glances.enable

Whether to enable Glances. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/glances.nix>

## services.glances.package

The glances package to use. Type: package Default: pkgs.glances Declared by: <nixpkgs/nixos/modules/services/monitoring/glances.nix>

## services.glances.extraArgs

Extra command-line arguments to pass to glances. See https://glances.readthedocs.io/en/latest/cmds.html for all available options. Type: list of string Default: [ "--webserver" ] Example: [ "--webserver" "--disable-webui" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/glances.nix>

## services.glances.openFirewall

Open port in the firewall for glances. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/glances.nix>

## services.glances.port

Port the server will isten on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 61208 Declared by: <nixpkgs/nixos/modules/services/monitoring/glances.nix>
