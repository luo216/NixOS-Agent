---
module: swapDevices.*
option_count: 7
source: options.html
---

# swapDevices.*

## swapDevices.*.device

Path of the device or swap file. Type: non-empty string Example: "/dev/sda3" Declared by: <nixpkgs/nixos/modules/config/swap.nix>

## swapDevices.*.discardPolicy

Specify the discard policy for the swap device. If “once”, then the whole swap space is discarded at swapon invocation. If “pages”, asynchronous discard on freed pages is performed, before returning to the available pages pool. With “both”, both policies are activated. See swapon(8) for more information. Type: null or one of “once”, “pages”, “both” Default: null Example: "once" Declared by: <nixpkgs/nixos/modules/config/swap.nix>

## swapDevices.*.label

Label of the device. Can be used instead of device. Type: string Example: "swap" Declared by: <nixpkgs/nixos/modules/config/swap.nix>

## swapDevices.*.options

Options used to mount the swap. Type: list of non-empty string Default: [ "defaults" ] Example: [ "nofail" ] Declared by: <nixpkgs/nixos/modules/config/swap.nix>

## swapDevices.*.priority

Specify the priority of the swap device. Priority is a value between 0 and 32767. Higher numbers indicate higher priority. null lets the kernel choose a priority, which will show up as a negative value. Type: null or signed integer Default: null Example: 2048 Declared by: <nixpkgs/nixos/modules/config/swap.nix>

## swapDevices.*.randomEncryption

Encrypt swap device with a random key. This way you won’t have a persistent swap device. HINT: run “cryptsetup benchmark” to test cipher performance on your machine. WARNING: Don’t try to hibernate when you have at least one swap partition with this option enabled! We have no way to set the partition into which hibernation image is saved, so if your image ends up on an encrypted one you would lose it! WARNING #2: Do not use /dev/disk/by-uuid/… or /dev/disk/by-label/… as your swap device when using randomEncryption as the UUIDs and labels will get erased on every boot when the partition is encrypted. Best to use /dev/disk/by-partuuid/… Type: (submodule) or boolean convertible to it Default: false Example: { cipher = "serpent-xts-plain64"; enable = true; source = "/dev/random"; } Declared by: <nixpkgs/nixos/modules/config/swap.nix>

## swapDevices.*.size

If this option is set, ‘device’ is interpreted as the path of a swapfile that will be created automatically with the indicated size in MiB (1024×1024 bytes). Type: null or signed integer Default: null Example: 2048 Declared by: <nixpkgs/nixos/modules/config/swap.nix>
