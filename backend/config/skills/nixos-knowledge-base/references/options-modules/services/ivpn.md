---
module: services.ivpn
option_count: 1
source: options.html
---

# services.ivpn

## services.ivpn.enable

This option enables iVPN daemon. This sets networking.firewall.checkReversePath to “loose”, which might be undesirable for security. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/ivpn.nix>
