---
module: programs.nncp
option_count: 5
source: options.html
---

# programs.nncp

## programs.nncp.enable

Whether to enable NNCP (Node to Node copy) utilities and configuration. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/nncp.nix>

## programs.nncp.package

The nncp package to use. Type: package Default: pkgs.nncp Declared by: <nixpkgs/nixos/modules/programs/nncp.nix>

## programs.nncp.group

The group under which NNCP files shall be owned. Any member of this group may access the secret keys of this NNCP node. Type: string Default: "uucp" Declared by: <nixpkgs/nixos/modules/programs/nncp.nix>

## programs.nncp.secrets

A list of paths to NNCP configuration files that should not be in the Nix store. These files are layered on top of the values at programs.nncp.settings. Type: list of string Example: [ "/run/keys/nncp.hjson" ] Declared by: <nixpkgs/nixos/modules/programs/nncp.nix>

## programs.nncp.settings

NNCP configuration, see http://www.nncpgo.org/Configuration.html. At runtime these settings will be overlayed by the contents of programs.nncp.secrets into the file /run/nncp.hjson. Node keypairs go in secrets, do not specify them in settings as they will be leaked into /nix/store! Type: JSON value Default: { } Declared by: <nixpkgs/nixos/modules/programs/nncp.nix>
