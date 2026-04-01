---
module: services.speedify
option_count: 2
source: options.html
---

# services.speedify

## services.speedify.enable

This option enables Speedify daemon. This sets networking.firewall.checkReversePath to “loose”, which might be undesirable for security. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/speedify.nix>

## services.speedify.package

The speedify package to use. Type: package Default: pkgs.speedify Declared by: <nixpkgs/nixos/modules/services/networking/speedify.nix>
