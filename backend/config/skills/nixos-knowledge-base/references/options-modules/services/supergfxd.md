---
module: services.supergfxd
option_count: 2
source: options.html
---

# services.supergfxd

## services.supergfxd.enable

Whether to enable the supergfxd service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/supergfxd.nix>

## services.supergfxd.settings

The content of /etc/supergfxd.conf. See https://gitlab.com/asus-linux/supergfxctl/#config-options-etcsupergfxdconf. Type: null or JSON value Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/supergfxd.nix>
