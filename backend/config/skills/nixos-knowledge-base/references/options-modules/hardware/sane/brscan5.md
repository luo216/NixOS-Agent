---
module: hardware.sane.brscan5
option_count: 2
source: options.html
---

# hardware.sane.brscan5

## hardware.sane.brscan5.enable

Whether to enable the Brother brscan5 sane backend. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/sane_extra_backends/brscan5.nix>

## hardware.sane.brscan5.netDevices

The list of network devices that will be registered against the brscan5 sane backend. Type: attribute set of (submodule) Default: { } Example: { office1 = { ip = "192.168.1.2"; model = "MFC-7860DW"; }; office2 = { model = "MFC-7860DW"; nodename = "BRW0080927AFBCE"; }; } Declared by: <nixpkgs/nixos/modules/services/hardware/sane_extra_backends/brscan5.nix>
