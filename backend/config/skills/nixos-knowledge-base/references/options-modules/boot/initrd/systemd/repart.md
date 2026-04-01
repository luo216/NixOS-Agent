---
module: boot.initrd.systemd.repart
option_count: 5
source: options.html
---

# boot.initrd.systemd.repart

## boot.initrd.systemd.repart.enable

Grow and add partitions to a partition table at boot time in the initrd. systemd-repart only works with GPT partition tables. To run systemd-repart after the initrd, see options.systemd.repart.enable. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/repart.nix>

## boot.initrd.systemd.repart.device

The device to operate on. If device == null, systemd-repart will operate on the device backing the root partition. So in order to dynamically create the root partition in the initrd you need to set a device. Type: null or string Default: null Example: "/dev/vda" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/repart.nix>

## boot.initrd.systemd.repart.discard

Controls whether to issue the BLKDISCARD I/O control command on the space taken up by any added partitions or on the space in between them. Usually, it’s a good idea to issue this request since it tells the underlying hardware that the covered blocks shall be considered empty, improving performance. See systemd-repart(8) for details. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/repart.nix>

## boot.initrd.systemd.repart.empty

Controls how to operate on empty devices that contain no partition table yet. See systemd-repart(8) for details. Type: one of “refuse”, “allow”, “require”, “force”, “create” Default: "refuse" Example: "require" Declared by: <nixpkgs/nixos/modules/system/boot/systemd/repart.nix>

## boot.initrd.systemd.repart.extraArgs

Extra command-line arguments to pass to systemd-repart. See systemd-repart(8) for all available options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/system/boot/systemd/repart.nix>
