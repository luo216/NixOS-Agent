---
module: hardware.sata.timeout
option_count: 3
source: options.html
---

# hardware.sata.timeout

## hardware.sata.timeout.enable

Whether to enable SATA drive timeouts. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/sata.nix>

## hardware.sata.timeout.deciSeconds

Set SCT Error Recovery Control timeout in deciseconds for use in RAID configurations. Values are as follows: 0 = disable SCT ERT 70 = default in consumer drives (7 seconds) Maximum is disk dependant but probably 60 seconds. Type: signed integer Example: 70 Declared by: <nixpkgs/nixos/modules/hardware/sata.nix>

## hardware.sata.timeout.drives

List of drives for which to configure the timeout. Type: list of (submodule) Declared by: <nixpkgs/nixos/modules/hardware/sata.nix>
