---
module: virtualisation.kvmgt
option_count: 3
source: options.html
---

# virtualisation.kvmgt

## virtualisation.kvmgt.enable

Whether to enable KVMGT (iGVT-g) VGPU support. Allows Qemu/KVM guests to share host’s Intel integrated graphics card. Currently only one graphical device can be shared. To allow users to access the device without root add them to the kvm group: users.extraUsers.<yourusername>.extraGroups = [ "kvm" ]; . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/virtualisation/kvmgt.nix>

## virtualisation.kvmgt.device

PCI ID of graphics card. You can figure it with ls /sys/class/mdev_bus. Type: string Default: "0000:00:02.0" Declared by: <nixpkgs/nixos/modules/virtualisation/kvmgt.nix>

## virtualisation.kvmgt.vgpus

Virtual GPUs to be used in Qemu. You can find devices via ls /sys/bus/pci/devices/*/mdev_supported_types and find info about device via cat /sys/bus/pci/devices/*/mdev_supported_types/i915-GVTg_V5_4/description Type: attribute set of (submodule) Default: { } Example: { i915-GVTg_V5_8 = { uuid = [ "a297db4a-f4c2-11e6-90f6-d3b88d6c9525" ]; }; } Declared by: <nixpkgs/nixos/modules/virtualisation/kvmgt.nix>
