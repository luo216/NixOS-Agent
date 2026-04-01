---
module: services.thinkfan.fans.*
option_count: 3
source: options.html
---

# services.thinkfan.fans.*

## services.thinkfan.fans.*.indices

A list of fans to pick in case multiple fans match the query. Note Indices start from 0. Type: null or (list of (unsigned integer, meaning >=0)) Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>

## services.thinkfan.fans.*.query

The query string used to match one or more fans: can be a fullpath to the temperature file (single fan) or a fullpath to a driver directory (multiple fans). Note When multiple fans match, the query can be restricted using the name or indices options. Type: string Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>

## services.thinkfan.fans.*.type

The fan type, can be hwmon for standard fans, atasmart to read the temperature via S.M.A.R.T (requires smartSupport to be enabled), tpacpi for the legacy thinkpac_acpi driver, or nvml for the (proprietary) nVidia driver. Type: one of “hwmon”, “atasmart”, “tpacpi”, “nvml” Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>
