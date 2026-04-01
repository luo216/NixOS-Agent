---
module: nixpkgs
option_count: 8
source: options.html
---

# nixpkgs

## nixpkgs.buildPlatform

Specifies the platform on which NixOS should be built. By default, NixOS is built on the system where it runs, but you can change where it’s built. Setting this option will cause NixOS to be cross-compiled. For instance, if you’re doing distributed multi-platform deployment, or if you’re building machines, you can set this to match your development system and/or build farm. Ignored when nixpkgs.pkgs is set. Type: string or (attribute set) Default: config.nixpkgs.hostPlatform Example: { system = "x86_64-linux"; } Declared by: <nixpkgs/nixos/modules/misc/nixpkgs.nix>

## nixpkgs.config

Global configuration for Nixpkgs. The complete list of Nixpkgs configuration options is in the Nixpkgs manual section on global configuration. Ignored when nixpkgs.pkgs is set. Type: nixpkgs config Default: { } Example: { allowBroken = true; allowUnfree = true; } Declared by: <nixpkgs/nixos/modules/misc/nixpkgs.nix>

## nixpkgs.crossSystem

Systems with a recently generated hardware-configuration.nix may instead specify only nixpkgs.buildPlatform, or fall back to removing the nixpkgs.hostPlatform line from the generated config. Specifies the platform for which NixOS should be built. Specify this only if it is different from nixpkgs.localSystem, the platform on which NixOS should be built. In other words, specify this to cross-compile NixOS. Otherwise it should be set as null, the default. See its description in the Nixpkgs manual for more details. Ignored when nixpkgs.pkgs or hostPlatform is set. Type: null or (attribute set) Default: null Example: { system = "aarch64-linux"; } Declared by: <nixpkgs/nixos/modules/misc/nixpkgs.nix>

## nixpkgs.hostPlatform

Specifies the platform where the NixOS configuration will run. To cross-compile, set also nixpkgs.buildPlatform. Ignored when nixpkgs.pkgs is set. Type: string or (attribute set) Example: { system = "aarch64-linux"; } Declared by: <nixpkgs/nixos/modules/misc/nixpkgs.nix>

## nixpkgs.localSystem

Systems with a recently generated hardware-configuration.nix do not need to specify this option, unless cross-compiling, in which case you should set only nixpkgs.buildPlatform. If this is somehow not feasible, you may fall back to removing the nixpkgs.hostPlatform line from the generated config and use the old options. Specifies the platform on which NixOS should be built. When nixpkgs.crossSystem is unset, it also specifies the platform for which NixOS should be built. If this option is unset, it defaults to the platform type of the machine where evaluation happens. Specifying this option is useful when doing distributed multi-platform deployment, or when building virtual machines. See its description in the Nixpkgs manual for more details. Ignored when nixpkgs.pkgs or hostPlatform is set. Type: attribute set Default: config.nixpkgs.system Example: { system = "aarch64-linux"; } Declared by: <nixpkgs/nixos/modules/misc/nixpkgs.nix>

## nixpkgs.overlays

List of overlays to apply to Nixpkgs. This option allows modifying the Nixpkgs package set accessed through the pkgs module argument. For details, see the Overlays chapter in the Nixpkgs manual. If the nixpkgs.pkgs option is set, overlays specified using nixpkgs.overlays will be applied after the overlays that were already included in nixpkgs.pkgs. Type: list of (nixpkgs overlay) Default: [ ] Example: [ (self: super: { openssh = super.openssh.override { hpnSupport = true; kerberos = self.libkrb5; }; }) ] Declared by: <nixpkgs/nixos/modules/misc/nixpkgs.nix>

## nixpkgs.pkgs

If set, the pkgs argument to all NixOS modules is the value of this option, extended with nixpkgs.overlays, if that is also set. Either nixpkgs.crossSystem or nixpkgs.localSystem will be used in an assertion to check that the NixOS and Nixpkgs architectures match. Any other options in nixpkgs.*, notably config, will be ignored. If unset, the pkgs argument to all NixOS modules is determined as shown in the default value for this option. The default value imports the Nixpkgs source files relative to the location of this NixOS module, because NixOS and Nixpkgs are distributed together for consistency, so the nixos in the default value is in fact a relative path. The config, overlays, localSystem, and crossSystem come from this option’s siblings. This option can be used by applications like NixOps to increase the performance of evaluation, or to create packages that depend on a container that should be built with the exact same evaluation of Nixpkgs, for example. Applications like this should set their default value using lib.mkDefault, so user-provided configuration can override it without using lib. Note that using a distinct version of Nixpkgs with NixOS may be an unexpected source of problems. Use this option with care. Type: An evaluation of Nixpkgs; the top level attribute set of packages Default: import "${nixos}/.." { inherit (config.nixpkgs) config overlays localSystem crossSystem; } Example: import <nixpkgs> {} Declared by: <nixpkgs/nixos/modules/misc/nixpkgs.nix>

## nixpkgs.system

This option does not need to be specified for NixOS configurations with a recently generated hardware-configuration.nix. Specifies the Nix platform type on which NixOS should be built. It is better to specify nixpkgs.localSystem instead. { nixpkgs.system = ..; } is the same as { nixpkgs.localSystem.system = ..; } See nixpkgs.localSystem for more information. Ignored when nixpkgs.pkgs, nixpkgs.localSystem or nixpkgs.hostPlatform is set. Type: string Default: Traditionally builtins.currentSystem, but unset when invoking NixOS through lib.nixosSystem. Example: "i686-linux" Declared by: <nixpkgs/nixos/modules/misc/nixpkgs.nix>
