---
module: hardware.rasdaemon
option_count: 8
source: options.html
---

# hardware.rasdaemon

## hardware.rasdaemon.enable

Whether to enable RAS logging daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/rasdaemon.nix>

## hardware.rasdaemon.package

The rasdaemon package to use. Type: package Default: pkgs.rasdaemon Declared by: <nixpkgs/nixos/modules/services/hardware/rasdaemon.nix>

## hardware.rasdaemon.config

rasdaemon configuration, currently only used for CE PFA for details, read rasdaemon.outPath/etc/sysconfig/rasdaemon’s comments Type: strings concatenated with “\n” Default: "" Example: '' # defaults from included config PAGE_CE_REFRESH_CYCLE="24h" PAGE_CE_THRESHOLD="50" PAGE_CE_ACTION="soft" '' Declared by: <nixpkgs/nixos/modules/services/hardware/rasdaemon.nix>

## hardware.rasdaemon.extraModules

extra kernel modules to load Type: list of string Default: [ ] Example: [ "i7core_edac" ] Declared by: <nixpkgs/nixos/modules/services/hardware/rasdaemon.nix>

## hardware.rasdaemon.labels

Additional memory module label descriptions to be placed in /etc/ras/dimm_labels.d/labels Type: strings concatenated with “\n” Default: "" Example: '' # vendor and model may be shown by 'ras-mc-ctl --mainboard' vendor: ASRock product: To Be Filled By O.E.M. model: B450M Pro4 # these labels are names for the motherboard slots # the numbers may be shown by `ras-mc-ctl --error-count` # they are mc:csrow:channel DDR4_A1: 0.2.0; DDR4_B1: 0.2.1; DDR4_A2: 0.3.0; DDR4_B2: 0.3.1; '' Declared by: <nixpkgs/nixos/modules/services/hardware/rasdaemon.nix>

## hardware.rasdaemon.mainboard

Custom mainboard description, see ras-mc-ctl(8) for more details. Type: strings concatenated with “\n” Default: "" Example: '' vendor = ASRock model = B450M Pro4 # it should default to such values from # /sys/class/dmi/id/board_[vendor|name] # alternatively one can supply a script # that returns the same format as above script = <path to script> '' Declared by: <nixpkgs/nixos/modules/services/hardware/rasdaemon.nix>

## hardware.rasdaemon.record

record events via sqlite3, required for ras-mc-ctl Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/hardware/rasdaemon.nix>

## hardware.rasdaemon.testing

Whether to enable error injection infrastructure. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/rasdaemon.nix>
