---
module: boot.tmp.zramSettings
option_count: 4
source: options.html
---

# boot.tmp.zramSettings

## boot.tmp.zramSettings.compression-algorithm

The compression algorithm to use for the zram device. See: https://github.com/systemd/zram-generator/blob/main/zram-generator.conf.example Type: string Default: "zstd" Example: "lzo-rle" Declared by: <nixpkgs/nixos/modules/system/boot/zram-as-tmp.nix>

## boot.tmp.zramSettings.fs-type

The file system to put on the device. See: https://github.com/systemd/zram-generator/blob/main/zram-generator.conf.example Type: string Default: "ext4" Example: "ext2" Declared by: <nixpkgs/nixos/modules/system/boot/zram-as-tmp.nix>

## boot.tmp.zramSettings.options

By default, file systems and swap areas are trimmed on-the-go by setting “discard”. Setting this to the empty string clears the option. See: https://github.com/systemd/zram-generator/blob/main/zram-generator.conf.example Type: string Default: "X-mount.mode=1777,discard" Declared by: <nixpkgs/nixos/modules/system/boot/zram-as-tmp.nix>

## boot.tmp.zramSettings.zram-size

The size of the zram device, as a function of MemTotal, both in MB. For example, if the machine has 1 GiB, and zram-size=ram/4, then the zram device will have 256 MiB. Fractions in the range 0.1–0.5 are recommended See: https://github.com/systemd/zram-generator/blob/main/zram-generator.conf.example Type: string Default: "ram * 0.5" Example: "min(ram / 2, 4096)" Declared by: <nixpkgs/nixos/modules/system/boot/zram-as-tmp.nix>
