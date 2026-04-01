---
module: services.xinetd
option_count: 3
source: options.html
---

# services.xinetd

## services.xinetd.enable

Whether to enable the xinetd super-server daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>

## services.xinetd.extraDefaults

Additional configuration lines added to the default section of xinetd’s configuration. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>

## services.xinetd.services

A list of services provided by xinetd. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/xinetd.nix>
