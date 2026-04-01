---
module: services.nixseparatedebuginfod2
option_count: 5
source: options.html
---

# services.nixseparatedebuginfod2

## services.nixseparatedebuginfod2.enable

Whether to enable nixseparatedebuginfod2, a debuginfod server providing source and debuginfo for nix packages. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/development/nixseparatedebuginfod2.nix>

## services.nixseparatedebuginfod2.package

The nixseparatedebuginfod2 package to use. Type: package Default: pkgs.nixseparatedebuginfod2 Declared by: <nixpkgs/nixos/modules/services/development/nixseparatedebuginfod2.nix>

## services.nixseparatedebuginfod2.cacheExpirationDelay

keep unused cache entries for this long. A number followed by a unit Type: string Default: "1d" Declared by: <nixpkgs/nixos/modules/services/development/nixseparatedebuginfod2.nix>

## services.nixseparatedebuginfod2.port

port to listen Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1949 Declared by: <nixpkgs/nixos/modules/services/development/nixseparatedebuginfod2.nix>

## services.nixseparatedebuginfod2.substituters

nix substituter to fetch debuginfo from. Either http/https/file substituters, or local: to use debuginfo present in the local store. Type: list of string Default: [ "local:" "https://cache.nixos.org" ] Declared by: <nixpkgs/nixos/modules/services/development/nixseparatedebuginfod2.nix>
