---
module: services.freefall
option_count: 3
source: options.html
---

# services.freefall

## services.freefall.enable

Whether to protect HP/Dell laptop hard drives (not SSDs) in free fall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/hardware/freefall.nix>

## services.freefall.package

The freefall package to use. Type: package Default: pkgs.freefall Declared by: <nixpkgs/nixos/modules/services/hardware/freefall.nix>

## services.freefall.devices

Device paths to all internal spinning hard drives. Type: list of string Default: [ "/dev/sda" ] Declared by: <nixpkgs/nixos/modules/services/hardware/freefall.nix>
