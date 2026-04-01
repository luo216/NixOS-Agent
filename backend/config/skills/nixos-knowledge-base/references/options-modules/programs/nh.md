---
module: programs.nh
option_count: 3
source: options.html
---

# programs.nh

## programs.nh.enable

Whether to enable nh, yet another Nix CLI helper. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/nh.nix>

## programs.nh.package

The nh package to use. Type: package Default: pkgs.nh Declared by: <nixpkgs/nixos/modules/programs/nh.nix>

## programs.nh.flake

The string that will be used for the NH_FLAKE environment variable. NH_FLAKE is used by nh as the default flake for performing actions, such as nh os switch. This behaviour can be overriden per-command with environment variables that will take priority. NH_OS_FLAKE: will take priority for nh os commands. NH_HOME_FLAKE: will take priority for nh home commands. NH_DARWIN_FLAKE: will take priority for nh darwin commands. The formerly valid FLAKE is now deprecated by nh, and will cause hard errors in future releases if NH_FLAKE is not set. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/programs/nh.nix>
