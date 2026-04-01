---
module: documentation.nixos
option_count: 5
source: options.html
---

# documentation.nixos

## documentation.nixos.enable

Whether to install NixOS’s own documentation. This includes man pages like configuration.nix(5) if documentation.man.enable is set. This includes the HTML manual and the nixos-help command if documentation.doc.enable is set. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/misc/documentation.nix>

## documentation.nixos.checkRedirects

Check redirects for manualHTML. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/misc/documentation.nix>

## documentation.nixos.extraModuleSources

Which extra NixOS module paths the generated NixOS’s documentation should strip from options. Type: list of (absolute path or string) Default: [ ] Example: # e.g. with options from modules in ${pkgs.customModules}/nix: [ pkgs.customModules ] Declared by: <nixpkgs/nixos/modules/misc/documentation.nix>

## documentation.nixos.extraModules

Modules for which to show options even when not imported. Type: list of raw value Default: [ ] Declared by: <nixpkgs/nixos/modules/misc/documentation.nix>

## documentation.nixos.includeAllModules

Whether the generated NixOS’s documentation should include documentation for all the options from all the NixOS modules included in the current configuration.nix. Disabling this will make the manual generator to ignore options defined outside of baseModules. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/misc/documentation.nix>
