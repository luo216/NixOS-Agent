---
module: programs.ccache
option_count: 5
source: options.html
---

# programs.ccache

## programs.ccache.enable

Whether to enable CCache, a compiler cache for fast recompilation of C/C++ code. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/ccache.nix>

## programs.ccache.packageNames

Nix top-level packages to be compiled using CCache Type: list of string Default: [ ] Example: [ "wxGTK32" "ffmpeg" "libav_all" ] Declared by: <nixpkgs/nixos/modules/programs/ccache.nix>

## programs.ccache.cacheDir

CCache directory Type: absolute path Default: "/var/cache/ccache" Declared by: <nixpkgs/nixos/modules/programs/ccache.nix>

## programs.ccache.group

Group owner of CCache directory Type: string Default: "nixbld" Declared by: <nixpkgs/nixos/modules/programs/ccache.nix>

## programs.ccache.owner

Owner of CCache directory Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/programs/ccache.nix>
