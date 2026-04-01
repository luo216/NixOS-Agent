---
module: services.temporal
option_count: 7
source: options.html
---

# services.temporal

## services.temporal.enable

Whether to enable Temporal. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/temporal/default.nix>

## services.temporal.package

The Temporal package to use. Type: package Default: pkgs.temporal Declared by: <nixpkgs/nixos/modules/services/cluster/temporal/default.nix>

## services.temporal.dataDir

Data directory for Temporal. If you change this, you need to manually create the directory. You also need to create the temporal user and group, or change services.temporal.user and services.temporal.group to existing ones with access to the directory. Type: absolute path Default: "/var/lib/temporal" Declared by: <nixpkgs/nixos/modules/services/cluster/temporal/default.nix>

## services.temporal.group

The group temporal runs as. Should be left at default unless you have very specific needs. Type: string Default: "temporal" Declared by: <nixpkgs/nixos/modules/services/cluster/temporal/default.nix>

## services.temporal.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on a server or cluster. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/temporal/default.nix>

## services.temporal.settings

Temporal configuration. See https://docs.temporal.io/references/configuration for more information about Temporal configuration options Type: open submodule of (YAML 1.1 value) Declared by: <nixpkgs/nixos/modules/services/cluster/temporal/default.nix>

## services.temporal.user

The user Temporal runs as. Should be left at default unless you have very specific needs. Type: string Default: "temporal" Declared by: <nixpkgs/nixos/modules/services/cluster/temporal/default.nix>
