---
module: hardware.pcmcia
option_count: 3
source: options.html
---

# hardware.pcmcia

## hardware.pcmcia.enable

Enable this option to support PCMCIA card. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/hardware/pcmcia.nix>

## hardware.pcmcia.config

Path to the configuration file which maps the memory, IRQs and ports used by the PCMCIA hardware. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/hardware/pcmcia.nix>

## hardware.pcmcia.firmware

List of firmware used to handle specific PCMCIA card. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/hardware/pcmcia.nix>
