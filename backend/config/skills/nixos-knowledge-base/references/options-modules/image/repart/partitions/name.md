---
module: image.repart.partitions.<name>
option_count: 4
source: options.html
---

# image.repart.partitions.<name>

## image.repart.partitions.<name>.contents

The contents to end up in the filesystem image. Type: attribute set of (submodule) Default: { } Example: { "/EFI/BOOT/BOOTX64.EFI".source = "${pkgs.systemd}/lib/systemd/boot/efi/systemd-bootx64.efi"; "/loader/entries/nixos.conf".source = systemdBootEntry; } Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.partitions.<name>.nixStorePrefix

The prefix to use for store paths. Defaults to /nix/store. This is useful when you want to build a partition that only contains store paths and is mounted under /nix/store or if you want to create the store paths below a parent path (e.g., /@nix/nix/store). Type: absolute path Default: "/nix/store" Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.partitions.<name>.repartConfig

Specify the repart options for a partition as a structural setting. See repart.d(5) for all available options. Type: attribute set of (string or signed integer or boolean or list of string) Example: { SizeMaxBytes = "2G"; SizeMinBytes = "512M"; Type = "home"; } Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.partitions.<name>.storePaths

The store paths to include in the partition. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/image/repart.nix>
