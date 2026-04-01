---
module: services.thinkfan
option_count: 7
source: options.html
---

# services.thinkfan

## services.thinkfan.enable

Whether to enable thinkfan, a fan control program. Note This module targets IBM/Lenovo thinkpads by default, for other hardware you will have configure it more carefully. Type: boolean Default: false Related packages: pkgs.thinkfan Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>

## services.thinkfan.extraArgs

A list of extra command line arguments to pass to thinkfan. Check the thinkfan(1) manpage for available arguments. Type: list of string Default: [ ] Example: [ "-b" "0" ] Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>

## services.thinkfan.fans

List of fans thinkfan will control. Note This section slightly departs from the thinkfan.conf syntax. The type and path must be specified like this: type = "tpacpi"; query = "/proc/acpi/ibm/fan"; instead of a single declaration like: - tpacpi: /proc/acpi/ibm/fan Type: list of (open submodule of attribute set of (YAML 1.1 value)) Default: [ { query = "/proc/acpi/ibm/fan"; type = "tpacpi"; } ] Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>

## services.thinkfan.levels

[LEVEL LOW HIGH] LEVEL is the fan level to use: it can be an integer (0-7 with thinkpad_acpi), “level auto” (to keep the default firmware behavior), “level full-speed” or “level disengaged” (to run the fan as fast as possible). LOW is the temperature at which to step down to the previous level. HIGH is the temperature at which to step up to the next level. All numbers are integers. Type: list of (tuple of (unsigned integer, meaning >=0, or one of “level auto”, “level full-speed”, “level disengaged”) (unsigned integer, meaning >=0) (unsigned integer, meaning >=0)) Default: [ [ 0 0 55 ] [ 1 48 60 ] [ 2 50 61 ] [ 3 52 63 ] [ 6 56 65 ] [ 7 60 85 ] [ "level auto" 80 32767 ] ] Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>

## services.thinkfan.sensors

List of temperature sensors thinkfan will monitor. Note This section slightly departs from the thinkfan.conf syntax. The type and path must be specified like this: type = "tpacpi"; query = "/proc/acpi/ibm/thermal"; instead of a single declaration like: - tpacpi: /proc/acpi/ibm/thermal Type: list of (open submodule of attribute set of (YAML 1.1 value)) Default: [ { query = "/proc/acpi/ibm/thermal"; type = "tpacpi"; } ] Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>

## services.thinkfan.settings

Thinkfan settings. Use this option to configure thinkfan settings not exposed in a NixOS option or to bypass one. Before changing this, read the thinkfan.conf(5) manpage and take a look at the example config file at https://github.com/vmatare/thinkfan/blob/master/examples/thinkfan.yaml Type: attribute set of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>

## services.thinkfan.smartSupport

Whether to build thinkfan with S.M.A.R.T. support to read temperatures directly from hard disks. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/thinkfan.nix>
