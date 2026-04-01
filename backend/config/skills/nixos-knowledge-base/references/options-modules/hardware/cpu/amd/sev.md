---
module: hardware.cpu.amd.sev
option_count: 4
source: options.html
---

# hardware.cpu.amd.sev

## hardware.cpu.amd.sev.enable

Whether to enable access to the AMD SEV device. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/cpu/amd-sev.nix>

## hardware.cpu.amd.sev.group

Group to assign to the SEV device. Type: string Default: "sev" Declared by: <nixpkgs/nixos/modules/hardware/cpu/amd-sev.nix>

## hardware.cpu.amd.sev.mode

Mode to set for the SEV device. Type: string Default: "0660" Declared by: <nixpkgs/nixos/modules/hardware/cpu/amd-sev.nix>

## hardware.cpu.amd.sev.user

Owner to assign to the SEV device. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/hardware/cpu/amd-sev.nix>
