---
module: virtualisation.vmware.guest
option_count: 3
source: options.html
---

# virtualisation.vmware.guest

## virtualisation.vmware.guest.enable

Whether to enable VMWare Guest Support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/vmware-guest.nix>

## virtualisation.vmware.guest.package

Package providing open-vm-tools. Type: package Default: if config.virtualisation.vmware.headless then pkgs.open-vm-tools-headless else pkgs.open-vm-tools; Example: pkgs.open-vm-tools Declared by: <nixpkgs/nixos/modules/virtualisation/vmware-guest.nix>

## virtualisation.vmware.guest.headless

Whether to disable X11-related features. Type: boolean Default: !config.services.xserver.enable Declared by: <nixpkgs/nixos/modules/virtualisation/vmware-guest.nix>
