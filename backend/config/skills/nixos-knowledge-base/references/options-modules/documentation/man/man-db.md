---
module: documentation.man.man-db
option_count: 3
source: options.html
---

# documentation.man.man-db

## documentation.man.man-db.enable

Whether to enable man-db as the default man page viewer. Type: boolean Default: config.documentation.man.enable Example: false Declared by: <nixpkgs/nixos/modules/misc/man-db.nix>

## documentation.man.man-db.package

The man-db derivation to use. Useful to override configuration options used for the package. Type: package Default: pkgs.man-db Declared by: <nixpkgs/nixos/modules/misc/man-db.nix>

## documentation.man.man-db.manualPages

The manual pages to generate caches for if documentation.man.generateCaches is enabled. Must be a path to a directory with man pages under /share/man; see the source for an example. Advanced users can make this a content-addressed derivation to save a few rebuilds. Type: absolute path Default: all man pages in config.environment.systemPackages Declared by: <nixpkgs/nixos/modules/misc/man-db.nix>
