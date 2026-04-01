---
module: hardware.sane.brscan4
option_count: 2
source: options.html
---

# hardware.sane.brscan4

## hardware.sane.brscan4.enable

When enabled, will automatically register the “brscan4” sane backend and bring configuration files to their expected location. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/sane_extra_backends/brscan4.nix>

## hardware.sane.brscan4.netDevices

The list of network devices that will be registered against the brscan4 sane backend. Type: attribute set of (submodule) Default: { } Example: { office1 = { ip = "192.168.1.2"; model = "MFC-7860DW"; }; office2 = { model = "MFC-7860DW"; nodename = "BRW0080927AFBCE"; }; } Declared by: <nixpkgs/nixos/modules/services/hardware/sane_extra_backends/brscan4.nix>
