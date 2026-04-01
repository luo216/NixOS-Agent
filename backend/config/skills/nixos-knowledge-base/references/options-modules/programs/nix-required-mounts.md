---
module: programs.nix-required-mounts
option_count: 3
source: options.html
---

# programs.nix-required-mounts

## programs.nix-required-mounts.enable

Whether to enable Expose extra paths to the sandbox depending on derivations’ requiredSystemFeatures. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/programs/nix-required-mounts.nix>

## programs.nix-required-mounts.allowedPatterns

The hook config, describing which paths to mount for which system features Type: attribute set of (submodule) Default: { opengl.paths = config.hardware.graphics.extraPackages ++ [ config.graphics.opengl.package pkgs.addDriverRunpath.driverLink "/dev/dri" ]; } Example: { require-ipfs = { onFeatures = [ "ipfs" ]; paths = [ "/ipfs" ]; }; } Declared by: <nixpkgs/nixos/modules/programs/nix-required-mounts.nix>

## programs.nix-required-mounts.extraWrapperArgs

List of extra arguments (such as --add-flags -v) to pass to the hook’s wrapper Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/programs/nix-required-mounts.nix>
