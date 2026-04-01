---
module: nix.registry.<name>
option_count: 4
source: options.html
---

# nix.registry.<name>

## nix.registry.<name>.exact

Whether the from reference needs to match exactly. If set, a from reference like nixpkgs does not match with a reference like nixpkgs/nixos-20.03. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/nix-flakes.nix>

## nix.registry.<name>.flake

The flake input from is rewritten to. Type: null or (attribute set) Default: null Example: nixpkgs Declared by: <nixpkgs/nixos/modules/config/nix-flakes.nix>

## nix.registry.<name>.from

The flake reference to be rewritten. The format of flake references is described in nix3-flake(1). Type: attribute set of (string or signed integer or boolean or absolute path or package) Example: { id = "nixpkgs"; type = "indirect"; } Declared by: <nixpkgs/nixos/modules/config/nix-flakes.nix>

## nix.registry.<name>.to

The flake reference from is rewritten to. The format of flake references is described in nix3-flake(1). Type: attribute set of (string or signed integer or boolean or absolute path or package) Example: { owner = "my-org"; repo = "my-nixpkgs"; type = "github"; } Declared by: <nixpkgs/nixos/modules/config/nix-flakes.nix>
