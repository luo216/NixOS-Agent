---
module: services.angrr
option_count: 8
source: options.html
---

# services.angrr

## services.angrr.enable

Whether to enable angrr. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/angrr.nix>

## services.angrr.enableNixGcIntegration

Whether to enable nix-gc.service integration Type: boolean Declared by: <nixpkgs/nixos/modules/services/misc/angrr.nix>

## services.angrr.package

The angrr package to use. Type: package Default: pkgs.angrr Declared by: <nixpkgs/nixos/modules/services/misc/angrr.nix>

## services.angrr.extraArgs

Extra command-line arguments pass to angrr. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/angrr.nix>

## services.angrr.logLevel

Set the log level of angrr. Type: one of “off”, “error”, “warn”, “info”, “debug”, “trace” Default: "info" Declared by: <nixpkgs/nixos/modules/services/misc/angrr.nix>

## services.angrr.ownedOnly

Control the --remove-root=<true|false> option of angrr. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/angrr.nix>

## services.angrr.period

The retention period of auto GC roots. Type: string Default: "7d" Example: "2weeks" Declared by: <nixpkgs/nixos/modules/services/misc/angrr.nix>

## services.angrr.removeRoot

Whether to pass the --remove-root option to angrr. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/angrr.nix>
