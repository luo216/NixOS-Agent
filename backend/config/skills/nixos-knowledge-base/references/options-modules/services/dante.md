---
module: services.dante
option_count: 2
source: options.html
---

# services.dante

## services.dante.enable

Whether to enable Dante SOCKS proxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/dante.nix>

## services.dante.config

Contents of Dante’s configuration file. NOTE: user.privileged, user.unprivileged and logoutput are set by the service. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/networking/dante.nix>
