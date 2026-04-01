---
module: system.replaceDependencies
option_count: 2
source: options.html
---

# system.replaceDependencies

## system.replaceDependencies.cutoffPackages

Packages to which no replacements should be applied. The initrd is matched by default, because its structure renders the replacement process ineffective and prone to breakage. Type: list of package Default: lib.optionals config.boot.initrd.enable [ config.system.build.initialRamdisk ] Declared by: <nixpkgs/nixos/modules/system/activation/top-level.nix>

## system.replaceDependencies.replacements

List of packages to override without doing a full rebuild. The original derivation and replacement derivation must have the same name length, and ideally should have close-to-identical directory layout. Type: list of (submodule) Default: [ ] Example: [ ({ oldDependency = pkgs.openssl; newDependency = pkgs.callPackage /path/to/openssl { }; }) ] Declared by: <nixpkgs/nixos/modules/system/activation/top-level.nix>
