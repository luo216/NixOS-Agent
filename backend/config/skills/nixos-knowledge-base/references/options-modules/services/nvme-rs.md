---
module: services.nvme-rs
option_count: 3
source: options.html
---

# services.nvme-rs

## services.nvme-rs.enable

Whether to enable nvme-rs, a monitoring service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>

## services.nvme-rs.package

The nvme-rs package to use. Type: package Default: pkgs.nvme-rs Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>

## services.nvme-rs.settings

Configuration for nvme-rs in TOML format. See the config.toml example for all available options. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>
