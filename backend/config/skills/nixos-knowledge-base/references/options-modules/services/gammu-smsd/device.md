---
module: services.gammu-smsd.device
option_count: 5
source: options.html
---

# services.gammu-smsd.device

## services.gammu-smsd.device.connection

Protocol which will be used to talk to the phone Type: string Default: "at" Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.device.group

Owner group of the device Type: string Default: "root" Example: "dialout" Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.device.path

Device node or address of the phone Type: absolute path Example: "/dev/ttyUSB2" Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.device.pin

PIN code for the simcard Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>

## services.gammu-smsd.device.synchronizeTime

Whether to set time from computer to the phone during starting connection Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/gammu-smsd.nix>
