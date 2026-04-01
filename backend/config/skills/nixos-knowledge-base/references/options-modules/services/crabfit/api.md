---
module: services.crabfit.api
option_count: 4
source: options.html
---

# services.crabfit.api

## services.crabfit.api.package

The crabfit-api package to use. Type: package Default: pkgs.crabfit-api Declared by: <nixpkgs/nixos/modules/services/web-apps/crabfit.nix>

## services.crabfit.api.environment

Environment variables for the crabfit API. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/crabfit.nix>

## services.crabfit.api.host

The hostname of the API. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/crabfit.nix>

## services.crabfit.api.port

The internal listening port of the API. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Declared by: <nixpkgs/nixos/modules/services/web-apps/crabfit.nix>
