---
module: services.nvme-rs.settings
option_count: 3
source: options.html
---

# services.nvme-rs.settings

## services.nvme-rs.settings.check_interval_secs

Check interval in seconds Type: signed integer Default: 3600 Example: 86400 Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>

## services.nvme-rs.settings.email

Email notification configuration Type: null or (open submodule of (TOML value)) Default: null Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>

## services.nvme-rs.settings.thresholds

Threshold configuration for NVMe monitoring Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/system/nvme-rs.nix>
