---
module: swapDevices.*.encrypted
option_count: 4
source: options.html
---

# swapDevices.*.encrypted

## swapDevices.*.encrypted.enable

The block device is backed by an encrypted one, adds this device as a initrd luks entry. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/encrypted-devices.nix>

## swapDevices.*.encrypted.blkDev

Location of the backing encrypted device. Type: null or string Default: null Example: "/dev/sda1" Declared by: <nixpkgs/nixos/modules/tasks/encrypted-devices.nix>

## swapDevices.*.encrypted.keyFile

Path to a keyfile used to unlock the backing encrypted device. When systemd stage 1 is not enabled, at the time this keyfile is accessed, the neededForBoot filesystems (see utils.fsNeededForBoot) will have been mounted under /mnt-root, so the keyfile path should usually start with “/mnt-root/”. When systemd stage 1 is enabled, fsNeededForBoot file systems will be mounted as needed under /sysroot, and the keyfile will not be accessed until its requisite mounts are done. Type: null or string Default: null Example: "/mnt-root/root/.swapkey" Declared by: <nixpkgs/nixos/modules/tasks/encrypted-devices.nix>

## swapDevices.*.encrypted.label

Label of the unlocked encrypted device. Set fileSystems.<name?>.device to /dev/mapper/<label> to mount the unlocked device. Type: null or string Default: null Example: "rootfs" Declared by: <nixpkgs/nixos/modules/tasks/encrypted-devices.nix>
