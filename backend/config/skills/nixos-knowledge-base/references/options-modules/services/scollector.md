---
module: services.scollector
option_count: 8
source: options.html
---

# services.scollector

## services.scollector.enable

Whether to run scollector. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/scollector.nix>

## services.scollector.package

The scollector package to use. Type: package Default: pkgs.scollector Declared by: <nixpkgs/nixos/modules/services/monitoring/scollector.nix>

## services.scollector.bosunHost

Host and port of the bosun server that will store the collected data. Type: string Default: "localhost:8070" Declared by: <nixpkgs/nixos/modules/services/monitoring/scollector.nix>

## services.scollector.collectors

An attribute set mapping the frequency of collection to a list of binaries that should be executed at that frequency. You can use “0” to run a binary forever. Type: attribute set of list of absolute path Default: { } Example: { "0" = [ "${postgresStats}/bin/collect-stats" ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/scollector.nix>

## services.scollector.extraConfig

Extra scollector configuration added to the end of scollector.toml Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/scollector.nix>

## services.scollector.extraOpts

Extra scollector command line options Type: list of string Default: [ ] Example: [ "-d" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/scollector.nix>

## services.scollector.group

Group account under which scollector runs. Type: string Default: "scollector" Declared by: <nixpkgs/nixos/modules/services/monitoring/scollector.nix>

## services.scollector.user

User account under which scollector runs. Type: string Default: "scollector" Declared by: <nixpkgs/nixos/modules/services/monitoring/scollector.nix>
