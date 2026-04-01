---
module: boot.tmp
option_count: 5
source: options.html
---

# boot.tmp

## boot.tmp.cleanOnBoot

Whether to delete all files in /tmp during boot. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/tmp.nix>

## boot.tmp.tmpfsHugeMemoryPages

never - Do not allocate huge memory pages. This is the default. always - Attempt to allocate huge memory page every time a new page is needed. within_size - Only allocate huge memory pages if it will be fully within i_size. Also respect madvise(2) hints. Recommended. advise - Only allocate huge memory pages if requested with madvise(2). Type: one of “never”, “always”, “within_size”, “advise” Default: "never" Example: "within_size" Declared by: <nixpkgs/nixos/modules/system/boot/tmp.nix>

## boot.tmp.tmpfsSize

Size of tmpfs in percentage. Percentage is defined by systemd. Type: string or (positive integer, meaning >0) Default: "50%" Declared by: <nixpkgs/nixos/modules/system/boot/tmp.nix>

## boot.tmp.useTmpfs

Whether to mount a tmpfs on /tmp during boot. Note Large Nix builds can fail if the mounted tmpfs is not large enough. In such a case either increase the tmpfsSize or disable this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/tmp.nix>

## boot.tmp.useZram

Whether to mount a zram device on /tmp during boot. Note Large Nix builds can fail if the mounted zram device is not large enough. In such a case either increase the zramSettings.zram-size or disable this option. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/zram-as-tmp.nix>
