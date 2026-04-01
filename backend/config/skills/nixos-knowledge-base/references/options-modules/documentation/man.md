---
module: documentation.man
option_count: 2
source: options.html
---

# documentation.man

## documentation.man.enable

Whether to install manual pages. This also includes man outputs. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/misc/documentation.nix>

## documentation.man.generateCaches

Whether to generate the manual page index caches. This allows searching for a page or keyword using utilities like apropos(1) and the -k option of man(1). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/misc/documentation.nix>
