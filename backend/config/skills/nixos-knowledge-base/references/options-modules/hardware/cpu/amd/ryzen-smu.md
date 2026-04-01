---
module: hardware.cpu.amd.ryzen-smu
option_count: 1
source: options.html
---

# hardware.cpu.amd.ryzen-smu

## hardware.cpu.amd.ryzen-smu.enable

Whether to enable ryzen_smu, a linux kernel driver that exposes access to the SMU (System Management Unit) for certain AMD Ryzen Processors. WARNING: Damage cause by use of your AMD processor outside of official AMD specifications or outside of factory settings are not covered under any AMD product warranty and may not be covered by your board or system manufacturer’s warranty . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/cpu/amd-ryzen-smu.nix>
