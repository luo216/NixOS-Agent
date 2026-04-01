---
module: services.atalkd
option_count: 3
source: options.html
---

# services.atalkd

## services.atalkd.enable

Whether to enable the AppleTalk daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/atalkd.nix>

## services.atalkd.configFile

Optional path to a custom atalkd.conf file. When set, this overrides the generated configuration from services.atalkd.interfaces. Type: null or absolute path Default: "/nix/store/xxx-atalkd.conf" Declared by: <nixpkgs/nixos/modules/services/networking/atalkd.nix>

## services.atalkd.interfaces

Per-interface configuration for atalkd. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/atalkd.nix>
