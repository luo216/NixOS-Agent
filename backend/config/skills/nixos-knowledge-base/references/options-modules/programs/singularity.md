---
module: programs.singularity
option_count: 7
source: options.html
---

# programs.singularity

## programs.singularity.enable

Whether to install Singularity/Apptainer with system-level overriding such as SUID support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/singularity.nix>

## programs.singularity.enableExternalLocalStateDir

Whether to use top-level directories as LOCALSTATEDIR instead of the store path ones. This affects the SESSIONDIR of Apptainer/Singularity. If set to true, the SESSIONDIR will become /var/lib/${projectName}/mnt/session. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/programs/singularity.nix>

## programs.singularity.enableFakeroot

Whether to enable the --fakeroot support of Singularity/Apptainer. This option is deprecated and has no effect. --fakeroot support is enabled automatically, as systemBinPaths = [ "/run/wrappers/bin" ] is always specified. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/programs/singularity.nix>

## programs.singularity.enableSuid

Whether to enable the SUID support of Singularity/Apptainer. Type: boolean Default: config.services.singularity.package.projectName != "apptainer" Example: false Declared by: <nixpkgs/nixos/modules/programs/singularity.nix>

## programs.singularity.package

The singularity package to use. Type: package Default: pkgs.singularity Example: apptainer Declared by: <nixpkgs/nixos/modules/programs/singularity.nix>

## programs.singularity.packageOverriden

This option provides access to the overridden result of programs.singularity.package. For example, the following configuration makes all the Nixpkgs packages use the overridden singularity: { config, lib, pkgs, ... }: { nixpkgs.overlays = [ (final: prev: { _singularity-orig = prev.singularity; singularity = config.programs.singularity.packageOverriden; }) ]; programs.singularity.enable = true; programs.singularity.package = pkgs._singularity-orig; } Use lib.mkForce to forcefully specify the overridden package. Type: null or package Default: null Declared by: <nixpkgs/nixos/modules/programs/singularity.nix>

## programs.singularity.systemBinPaths

(Extra) system-wide /**/bin paths for Apptainer/Singularity to find command-line utilities in. "/run/wrappers/bin" is included by default to make utilities with SUID bit set available to Apptainer/Singularity. Use lib.mkForce to shadow the default values. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/singularity.nix>
