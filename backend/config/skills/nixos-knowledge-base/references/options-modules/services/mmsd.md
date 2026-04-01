---
module: services.mmsd
option_count: 2
source: options.html
---

# services.mmsd

## services.mmsd.enable

Whether to enable Multimedia Messaging Service Daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/mmsd.nix>

## services.mmsd.extraArgs

Extra arguments passed to mmsd-tng Type: list of string Default: [ ] Example: [ "--debug" ] Declared by: <nixpkgs/nixos/modules/services/networking/mmsd.nix>
