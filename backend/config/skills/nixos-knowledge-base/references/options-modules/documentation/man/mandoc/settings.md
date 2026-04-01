---
module: documentation.man.mandoc.settings
option_count: 1
source: options.html
---

# documentation.man.mandoc.settings

## documentation.man.mandoc.settings.manpath

Override the default search path for man(1), apropos(1), and makewhatis(8). It can be used multiple times to specify multiple paths, with the order determining the manual page search order. This is not recommended in favor of documentation.man.mandoc.manPath, but if it’s needed to specify the manpath in this way, set documentation.man.mandoc.manPath to an empty list ([]). Type: list of string Default: [ ] Example: [ "/run/current-system/sw/share/man" ] Declared by: <nixpkgs/nixos/modules/misc/mandoc.nix>
