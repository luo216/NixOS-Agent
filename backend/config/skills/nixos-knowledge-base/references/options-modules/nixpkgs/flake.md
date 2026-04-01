---
module: nixpkgs.flake
option_count: 3
source: options.html
---

# nixpkgs.flake

## nixpkgs.flake.setFlakeRegistry

Whether to pin nixpkgs in the system-wide flake registry (/etc/nix/registry.json) to the store path of the sources of nixpkgs used to build the NixOS system. This is on by default for NixOS configurations built with flakes. This option makes nix run nixpkgs#hello reuse dependencies from the system, avoid refetching nixpkgs, and have a consistent result every time. Note that this option makes the NixOS closure depend on the nixpkgs sources, which may add undesired closure size if the system will not have any nix commands run on it. Type: boolean Default: "config.nixpkgs.flake.source != null" Declared by: <nixpkgs/nixos/modules/misc/nixpkgs-flake.nix>

## nixpkgs.flake.setNixPath

Whether to set NIX_PATH to include nixpkgs=flake:nixpkgs such that <nixpkgs> lookups receive the version of nixpkgs that the system was built with, in concert with nixpkgs.flake.setFlakeRegistry. This is on by default for NixOS configurations built with flakes. This makes nix-build '<nixpkgs>' -A hello work out of the box on flake systems. Note that this option makes the NixOS closure depend on the nixpkgs sources, which may add undesired closure size if the system will not have any nix commands run on it. Type: boolean Default: "config.nixpkgs.flake.source != null" Declared by: <nixpkgs/nixos/modules/misc/nixpkgs-flake.nix>

## nixpkgs.flake.source

The path to the nixpkgs sources used to build the system. This is automatically set up to be the store path of the nixpkgs flake used to build the system if using nixpkgs.lib.nixosSystem, and is otherwise null by default. This can also be optionally set if the NixOS system is not built with a flake but still uses pinned sources: set this to the store path for the nixpkgs sources used to build the system, as may be obtained by fetchTarball, for example. Note: the name of the store path must be “source” due to https://github.com/NixOS/nix/issues/7075. Type: null or string or absolute path Default: "if (using nixpkgsFlake.lib.nixosSystem) then self.outPath else null" Example: "fetchTarball { name = \"source\"; sha256 = \"sha256-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\"; url = \"https://github.com/nixos/nixpkgs/archive/somecommit.tar.gz\"; }" Declared by: <nixpkgs/nixos/modules/misc/nixpkgs-flake.nix>
