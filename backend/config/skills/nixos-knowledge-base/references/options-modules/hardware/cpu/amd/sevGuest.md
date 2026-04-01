---
module: hardware.cpu.amd.sevGuest
option_count: 4
source: options.html
---

# hardware.cpu.amd.sevGuest

## hardware.cpu.amd.sevGuest.enable

Whether to enable access to the AMD SEV guest device. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/cpu/amd-sev.nix>

## hardware.cpu.amd.sevGuest.group

Group to assign to the SEV guest device. Type: string Default: "sev-guest" Declared by: <nixpkgs/nixos/modules/hardware/cpu/amd-sev.nix>

## hardware.cpu.amd.sevGuest.mode

Mode to set for the SEV guest device. Type: string Default: "0660" Declared by: <nixpkgs/nixos/modules/hardware/cpu/amd-sev.nix>

## hardware.cpu.amd.sevGuest.user

Owner to assign to the SEV guest device. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/hardware/cpu/amd-sev.nix>
