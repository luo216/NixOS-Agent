---
module: services.ncps.upstream
option_count: 2
source: options.html
---

# services.ncps.upstream

## services.ncps.upstream.caches

A list of URLs of upstream binary caches. Type: list of string Example: [ "https://cache.nixos.org" ] Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>

## services.ncps.upstream.publicKeys

A list of public keys of upstream caches in the format host[-[0-9]*]:public-key. This flag is used to verify the signatures of store paths downloaded from upstream caches. Type: list of string Default: [ ] Example: [ "cache.nixos.org-1:6NCHdD59X431o0gWypbMrAURkbJ16ZPMQFGspcDShjY=" ] Declared by: <nixpkgs/nixos/modules/services/networking/ncps.nix>
