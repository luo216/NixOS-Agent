---
module: virtualisation.efi
option_count: 4
source: options.html
---

# virtualisation.efi

## virtualisation.efi.OVMF

OVMF firmware package, defaults to OVMF configured with secure boot if needed. Type: package Default: '' (pkgs.OVMF.override { secureBoot = cfg.useSecureBoot; }).fd'' Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.efi.firmware

Firmware binary for EFI implementation, defaults to OVMF. Type: absolute path Default: cfg.efi.OVMF.firmware Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.efi.keepVariables

Whether to keep EFI variable values from the generated system image Type: boolean Default: cfg.useBootLoader Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.efi.variables

Platform-specific flash binary for EFI variables, implementation-dependent to the EFI firmware. Defaults to OVMF. Type: absolute path Default: cfg.efi.OVMF.variables Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
