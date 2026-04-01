---
module: hardware.infiniband
option_count: 2
source: options.html
---

# hardware.infiniband

## hardware.infiniband.enable

Whether to enable Infiniband support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/infiniband.nix>

## hardware.infiniband.guids

A list of infiniband port guids on the system. This is discoverable using ibstat -p Type: list of string Default: [ ] Example: [ "0xe8ebd30000eee2e1" ] Declared by: <nixpkgs/nixos/modules/hardware/infiniband.nix>
