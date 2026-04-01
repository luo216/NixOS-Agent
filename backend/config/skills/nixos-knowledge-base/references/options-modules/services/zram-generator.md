---
module: services.zram-generator
option_count: 3
source: options.html
---

# services.zram-generator

## services.zram-generator.enable

Whether to enable Systemd unit generator for zram devices. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/system/zram-generator.nix>

## services.zram-generator.package

The zram-generator package to use. Type: package Default: pkgs.zram-generator Declared by: <nixpkgs/nixos/modules/services/system/zram-generator.nix>

## services.zram-generator.settings

Configuration for zram-generator, see https://github.com/systemd/zram-generator for documentation. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/system/zram-generator.nix>
