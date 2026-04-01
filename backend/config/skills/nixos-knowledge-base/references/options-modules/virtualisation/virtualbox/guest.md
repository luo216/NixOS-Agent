---
module: virtualisation.virtualbox.guest
option_count: 7
source: options.html
---

# virtualisation.virtualbox.guest

## virtualisation.virtualbox.guest.enable

Whether to enable the VirtualBox service and other guest additions. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-guest.nix>

## virtualisation.virtualbox.guest.clipboard

Whether to enable clipboard support. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-guest.nix>

## virtualisation.virtualbox.guest.dragAndDrop

Whether to enable drag and drop support. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-guest.nix>

## virtualisation.virtualbox.guest.seamless

Whether to enable seamless mode. When activated windows from the guest appear next to the windows of the host. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-guest.nix>

## virtualisation.virtualbox.guest.use3rdPartyModules

Whether to use the kernel modules provided by VirtualBox instead of the ones from the upstream kernel. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-guest.nix>

## virtualisation.virtualbox.guest.vboxsf

Whether to load vboxsf Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-guest.nix>

## virtualisation.virtualbox.guest.verbose

Whether to verbose logging for guest services. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/virtualbox-guest.nix>
