---
module: services.tandoor-recipes
option_count: 7
source: options.html
---

# services.tandoor-recipes

## services.tandoor-recipes.enable

Enable Tandoor Recipes. When started, the Tandoor Recipes database is automatically created if it doesn’t exist and updated if the package has changed. Both tasks are achieved by running a Django migration. A script to manage the instance (by wrapping Django’s manage.py) is linked to /var/lib/tandoor-recipes/tandoor-recipes-manage. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/tandoor-recipes.nix>

## services.tandoor-recipes.package

The tandoor-recipes package to use. Type: package Default: pkgs.tandoor-recipes Declared by: <nixpkgs/nixos/modules/services/misc/tandoor-recipes.nix>

## services.tandoor-recipes.address

Web interface address. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/tandoor-recipes.nix>

## services.tandoor-recipes.extraConfig

Extra tandoor recipes config options. See the example dot-env file for available options. Type: attribute set Default: { } Example: { ENABLE_SIGNUP = "1"; } Declared by: <nixpkgs/nixos/modules/services/misc/tandoor-recipes.nix>

## services.tandoor-recipes.group

Group under which Tandoor runs. Type: string Default: "tandoor_recipes" Declared by: <nixpkgs/nixos/modules/services/misc/tandoor-recipes.nix>

## services.tandoor-recipes.port

Web interface port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/misc/tandoor-recipes.nix>

## services.tandoor-recipes.user

User account under which Tandoor runs. Type: string Default: "tandoor_recipes" Declared by: <nixpkgs/nixos/modules/services/misc/tandoor-recipes.nix>
