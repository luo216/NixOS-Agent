---
module: services.mbpfan.settings.general
option_count: 4
source: options.html
---

# services.mbpfan.settings.general

## services.mbpfan.settings.general.high_temp

If temperature is above this, fan speed will gradually increase. Type: signed integer Default: 58 Declared by: <nixpkgs/nixos/modules/services/misc/mbpfan.nix>

## services.mbpfan.settings.general.low_temp

If temperature is below this, fans will run at minimum speed. Type: signed integer Default: 55 Declared by: <nixpkgs/nixos/modules/services/misc/mbpfan.nix>

## services.mbpfan.settings.general.max_temp

If temperature is above this, fans will run at maximum speed. Type: signed integer Default: 78 Declared by: <nixpkgs/nixos/modules/services/misc/mbpfan.nix>

## services.mbpfan.settings.general.polling_interval

The polling interval. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/misc/mbpfan.nix>
