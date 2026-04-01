---
module: hardware.sane.brscan5.netDevices.<name>
option_count: 4
source: options.html
---

# hardware.sane.brscan5.netDevices.<name>

## hardware.sane.brscan5.netDevices.<name>.ip

The ip address of the device. If undefined, you will have to provide a nodename. Type: null or string Default: null Example: "192.168.1.2" Declared by: <nixpkgs/nixos/modules/services/hardware/sane_extra_backends/brscan5.nix>

## hardware.sane.brscan5.netDevices.<name>.model

The model of the network device. Type: string Example: "ADS-1200" Declared by: <nixpkgs/nixos/modules/services/hardware/sane_extra_backends/brscan5.nix>

## hardware.sane.brscan5.netDevices.<name>.name

The friendly name you give to the network device. If undefined, the name of attribute will be used. Type: string Example: "office1" Declared by: <nixpkgs/nixos/modules/services/hardware/sane_extra_backends/brscan5.nix>

## hardware.sane.brscan5.netDevices.<name>.nodename

The node name of the device. If undefined, you will have to provide an ip. Type: null or string Default: null Example: "BRW0080927AFBCE" Declared by: <nixpkgs/nixos/modules/services/hardware/sane_extra_backends/brscan5.nix>
