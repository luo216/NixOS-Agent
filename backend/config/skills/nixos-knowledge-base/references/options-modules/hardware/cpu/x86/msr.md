---
module: hardware.cpu.x86.msr
option_count: 5
source: options.html
---

# hardware.cpu.x86.msr

## hardware.cpu.x86.msr.enable

Whether to enable the msr (Model-Specific Registers) kernel module and configure udev rules for its devices (usually /dev/cpu/*/msr). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/hardware/cpu/x86-msr.nix>

## hardware.cpu.x86.msr.group

Group to set for devices of the msr kernel subsystem. Type: string Default: "msr" Example: "nobody" Declared by: <nixpkgs/nixos/modules/hardware/cpu/x86-msr.nix>

## hardware.cpu.x86.msr.mode

Mode to set for devices of the msr kernel subsystem. Type: string Default: "0640" Example: "0660" Declared by: <nixpkgs/nixos/modules/hardware/cpu/x86-msr.nix>

## hardware.cpu.x86.msr.owner

Owner to set for devices of the msr kernel subsystem. Type: string Default: "root" Example: "nobody" Declared by: <nixpkgs/nixos/modules/hardware/cpu/x86-msr.nix>

## hardware.cpu.x86.msr.settings

Parameters for the msr kernel module. Type: open submodule of attribute set of (boolean or signed integer or string) Default: { } Declared by: <nixpkgs/nixos/modules/hardware/cpu/x86-msr.nix>
