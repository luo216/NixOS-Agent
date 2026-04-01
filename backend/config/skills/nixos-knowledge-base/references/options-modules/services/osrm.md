---
module: services.osrm
option_count: 7
source: options.html
---

# services.osrm

## services.osrm.enable

Enable the OSRM service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/osrm.nix>

## services.osrm.address

IP address on which the web server will listen. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/misc/osrm.nix>

## services.osrm.algorithm

Algorithm to use for the data. Must be one of CH, CoreCH, MLD Type: one of “CH”, “CoreCH”, “MLD” Default: "MLD" Declared by: <nixpkgs/nixos/modules/services/misc/osrm.nix>

## services.osrm.dataFile

Data file location Type: absolute path Example: "/var/lib/osrm/berlin-latest.osrm" Declared by: <nixpkgs/nixos/modules/services/misc/osrm.nix>

## services.osrm.extraFlags

Extra command line arguments passed to osrm-routed Type: list of string Default: [ ] Example: [ "--max-table-size 1000" "--max-matching-size 1000" ] Declared by: <nixpkgs/nixos/modules/services/misc/osrm.nix>

## services.osrm.port

Port on which the web server will run. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/misc/osrm.nix>

## services.osrm.threads

Number of threads to use. Type: signed integer Default: 4 Declared by: <nixpkgs/nixos/modules/services/misc/osrm.nix>
