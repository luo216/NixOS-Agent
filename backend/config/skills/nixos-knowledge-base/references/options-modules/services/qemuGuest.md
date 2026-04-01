---
module: services.qemuGuest
option_count: 2
source: options.html
---

# services.qemuGuest

## services.qemuGuest.enable

Whether to enable the qemu guest agent. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-guest-agent.nix>

## services.qemuGuest.package

The ga package to use. Type: package Default: pkgs.qemu_kvm.ga Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-guest-agent.nix>
