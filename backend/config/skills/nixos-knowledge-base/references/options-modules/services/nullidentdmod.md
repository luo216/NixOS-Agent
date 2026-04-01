---
module: services.nullidentdmod
option_count: 2
source: options.html
---

# services.nullidentdmod

## services.nullidentdmod.enable

Whether to enable the nullidentdmod identd daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nullidentdmod.nix>

## services.nullidentdmod.userid

User ID to return. Set to null to return a random string each time. Type: null or string Default: null Example: "alice" Declared by: <nixpkgs/nixos/modules/services/networking/nullidentdmod.nix>
