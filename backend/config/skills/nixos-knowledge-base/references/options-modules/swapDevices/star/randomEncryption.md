---
module: swapDevices.*.randomEncryption
option_count: 6
source: options.html
---

# swapDevices.*.randomEncryption

## swapDevices.*.randomEncryption.enable

Encrypt swap device with a random key. This way you won’t have a persistent swap device. WARNING: Don’t try to hibernate when you have at least one swap partition with this option enabled! We have no way to set the partition into which hibernation image is saved, so if your image ends up on an encrypted one you would lose it! WARNING #2: Do not use /dev/disk/by-uuid/… or /dev/disk/by-label/… as your swap device when using randomEncryption as the UUIDs and labels will get erased on every boot when the partition is encrypted. Best to use /dev/disk/by-partuuid/… Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/swap.nix>

## swapDevices.*.randomEncryption.allowDiscards

Whether to allow TRIM requests to the underlying device. This option has security implications; please read the LUKS documentation before activating it. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/swap.nix>

## swapDevices.*.randomEncryption.cipher

Use specified cipher for randomEncryption. Hint: Run “cryptsetup benchmark” to see which one is fastest on your machine. Type: string Default: "aes-xts-plain64" Example: "serpent-xts-plain64" Declared by: <nixpkgs/nixos/modules/config/swap.nix>

## swapDevices.*.randomEncryption.keySize

Set the encryption key size for the plain device. If not specified, the amount of data to read from source will be determined by cryptsetup. See cryptsetup-open(8) for details. Type: null or signed integer Default: null Example: "512" Declared by: <nixpkgs/nixos/modules/config/swap.nix>

## swapDevices.*.randomEncryption.sectorSize

Set the sector size for the plain encrypted device type. If not specified, the default sector size is determined from the underlying block device. See cryptsetup-open(8) for details. Type: null or signed integer Default: null Example: "4096" Declared by: <nixpkgs/nixos/modules/config/swap.nix>

## swapDevices.*.randomEncryption.source

Define the source of randomness to obtain a random key for encryption. Type: string Default: "/dev/urandom" Example: "/dev/random" Declared by: <nixpkgs/nixos/modules/config/swap.nix>
