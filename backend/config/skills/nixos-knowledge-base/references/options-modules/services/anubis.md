---
module: services.anubis
option_count: 3
source: options.html
---

# services.anubis

## services.anubis.package

The anubis package to use. Type: package Default: pkgs.anubis Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.defaultOptions

Default options for all instances of Anubis. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>

## services.anubis.instances

An attribute set of Anubis instances. The attribute name may be an empty string, in which case the -<name> suffix is not added to the service name and socket paths. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/anubis.nix>
