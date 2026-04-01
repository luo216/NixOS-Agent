---
module: programs.nix-required-mounts.allowedPatterns.<name>
option_count: 3
source: options.html
---

# programs.nix-required-mounts.allowedPatterns.<name>

## programs.nix-required-mounts.allowedPatterns.<name>.onFeatures

Which requiredSystemFeatures should trigger relaxation of the sandbox Type: list of string Default: [ "‹name›" ] Declared by: <nixpkgs/nixos/modules/programs/nix-required-mounts.nix>

## programs.nix-required-mounts.allowedPatterns.<name>.paths

A list of glob patterns, indicating which paths to expose to the sandbox Type: list of (absolute path or (submodule)) Declared by: <nixpkgs/nixos/modules/programs/nix-required-mounts.nix>

## programs.nix-required-mounts.allowedPatterns.<name>.unsafeFollowSymlinks

Whether to enable Instructs the hook to mount the symlink targets as well, when any of the paths contain symlinks. This may not work correctly with glob patterns. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/nix-required-mounts.nix>
