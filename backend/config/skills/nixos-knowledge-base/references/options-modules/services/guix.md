---
module: services.guix
option_count: 7
source: options.html
---

# services.guix

## services.guix.enable

Whether to enable Guix build daemon service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.package

The guix package to use. It should contain guix-daemon and guix executable. Type: package Default: pkgs.guix Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.extraArgs

Extra flags to pass to the Guix daemon service. Type: list of string Default: [ ] Example: [ "--max-jobs=4" "--debug" ] Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.group

The group of the Guix build user pool. Type: string Default: "guixbuild" Example: "guixbuild" Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.nrBuildUsers

Number of Guix build users to be used in the build pool. Type: unsigned integer, meaning >=0 Default: 10 Example: 20 Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.stateDir

The state directory where Guix service will store its data such as its user-specific profiles, cache, and state files. Warning Changing it to something other than the default will rebuild the package. Type: absolute path Default: "/var" Example: "/gnu/var" Declared by: <nixpkgs/nixos/modules/services/misc/guix>

## services.guix.storeDir

The store directory where the Guix service will serve to/from. Take note Guix cannot take advantage of substitutes if you set it something other than /gnu/store since most of the cached builds are assumed to be in there. Warning This will also recompile all packages because the normal cache no longer applies. Type: absolute path Default: "/gnu/store" Declared by: <nixpkgs/nixos/modules/services/misc/guix>
