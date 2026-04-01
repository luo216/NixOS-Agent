---
module: security.ipa.dyndns
option_count: 2
source: options.html
---

# security.ipa.dyndns

## security.ipa.dyndns.enable

Whether to enable FreeIPA automatic hostname updates. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/security/ipa.nix>

## security.ipa.dyndns.interface

Network interface to perform hostname updates through. Type: string Default: "*" Example: "eth0" Declared by: <nixpkgs/nixos/modules/security/ipa.nix>
