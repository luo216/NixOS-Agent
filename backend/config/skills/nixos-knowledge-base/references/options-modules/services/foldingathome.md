---
module: services.foldingathome
option_count: 6
source: options.html
---

# services.foldingathome

## services.foldingathome.enable

Whether to enable Folding@home client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/computing/foldingathome/client.nix>

## services.foldingathome.package

The fahclient package to use. Type: package Default: pkgs.fahclient Declared by: <nixpkgs/nixos/modules/services/computing/foldingathome/client.nix>

## services.foldingathome.daemonNiceLevel

Daemon process priority for FAHClient. 0 is the default Unix process priority, 19 is the lowest. Type: integer between -20 and 19 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/computing/foldingathome/client.nix>

## services.foldingathome.extraArgs

Extra startup options for the FAHClient. Run fah-client --help to find all the available options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/computing/foldingathome/client.nix>

## services.foldingathome.team

The team ID associated with the reported computation results. This will be used in the ranking statistics. By default, use the NixOS folding@home team ID is being used. Type: signed integer Default: 236565 Declared by: <nixpkgs/nixos/modules/services/computing/foldingathome/client.nix>

## services.foldingathome.user

The user associated with the reported computation results. This will be used in the ranking statistics. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/computing/foldingathome/client.nix>
