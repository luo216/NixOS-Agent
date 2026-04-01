---
module: services.thinkfan.sensors.*
option_count: 4
source: options.html
---

# services.thinkfan.sensors.*

## services.thinkfan.sensors.*.correction

A list of values to be added to the temperature of each sensor, can be used to equalize small discrepancies in temperature ratings. Type: null or (list of signed integer) Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>

## services.thinkfan.sensors.*.indices

A list of sensors to pick in case multiple sensors match the query. Note Indices start from 0. Type: null or (list of (unsigned integer, meaning >=0)) Default: null Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>

## services.thinkfan.sensors.*.query

The query string used to match one or more sensors: can be a fullpath to the temperature file (single sensor) or a fullpath to a driver directory (multiple sensors). Note When multiple sensors match, the query can be restricted using the name or indices options. Type: string Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>

## services.thinkfan.sensors.*.type

The sensor type, can be hwmon for standard sensors, atasmart to read the temperature via S.M.A.R.T (requires smartSupport to be enabled), tpacpi for the legacy thinkpac_acpi driver, or nvml for the (proprietary) nVidia driver. Type: one of “hwmon”, “atasmart”, “tpacpi”, “nvml” Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>
