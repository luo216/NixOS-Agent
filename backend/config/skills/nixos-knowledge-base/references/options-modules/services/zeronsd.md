---
module: services.zeronsd
option_count: 1
source: options.html
---

# services.zeronsd

## services.zeronsd.servedNetworks

ZeroTier Networks to start zeronsd instances for. Type: attribute set of (submodule) Default: { } Example: { a8a2c3c10c1a68de = { settings = { token = "/var/lib/zeronsd/apitoken"; }; }; } Declared by: <nixpkgs/nixos/modules/services/networking/zeronsd.nix>
