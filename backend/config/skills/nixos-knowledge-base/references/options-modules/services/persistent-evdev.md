---
module: services.persistent-evdev
option_count: 2
source: options.html
---

# services.persistent-evdev

## services.persistent-evdev.enable

Whether to enable virtual input devices that persist even if the backing device is hotplugged. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/persistent-evdev.nix>

## services.persistent-evdev.devices

A set of virtual proxy device labels with backing physical device ids. Physical devices should already exist in /dev/input/by-id/. Proxy devices will be automatically given a uinput- prefix. See the project page for example configuration of virtual devices with libvirt and remember to add uinput-* devices to the qemu cgroup_device_acl list (see virtualisation.libvirtd.qemu.verbatimConfig). Type: attribute set of string Default: { } Example: { persist-mouse0 = "usb-Logitech_G403_Prodigy_Gaming_Mouse_078738533531-event-if01"; persist-mouse1 = "usb-Logitech_G403_Prodigy_Gaming_Mouse_078738533531-event-mouse"; persist-mouse2 = "usb-Logitech_G403_Prodigy_Gaming_Mouse_078738533531-if01-event-kbd"; persist-keyboard0 = "usb-Microsoft_Natural®_Ergonomic_Keyboard_4000-event-kbd"; persist-keyboard1 = "usb-Microsoft_Natural®_Ergonomic_Keyboard_4000-if01-event-kbd"; } Declared by: <nixpkgs/nixos/modules/services/misc/persistent-evdev.nix>
