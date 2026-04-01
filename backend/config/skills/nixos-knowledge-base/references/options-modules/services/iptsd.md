---
module: services.iptsd
option_count: 2
source: options.html
---

# services.iptsd

## services.iptsd.enable

Whether to enable the userspace daemon for Intel Precise Touch & Stylus. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/iptsd.nix>

## services.iptsd.config

Configuration for IPTSD. See the reference configuration for available options and defaults. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/iptsd.nix>
