---
module: image.repart
option_count: 8
source: options.html
---

# image.repart

## image.repart.package

The systemd-repart package to use. Type: package Default: pkgs.buildPackages.systemd Example: pkgs.buildPackages.systemdMinimal.override { withCryptsetup = true; } Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.mkfsOptions

Specify extra options for created file systems. The specified options are converted to individual environment variables of the format SYSTEMD_REPART_MKFS_OPTIONS_<FSTYPE>. See upstream systemd documentation for information about the usage of these environment variables. The example would produce the following environment variable: SYSTEMD_REPART_MKFS_OPTIONS_VFAT="-S 512 -c" Type: attribute set of list of string Default: { } Example: { vfat = [ "-S 512" "-c" ]; } Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.name

Name of the image. If this option is unset but config.system.image.id is set, config.system.image.id is used as the default value. Type: string Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.partitions

Specify partitions as a set of the names of the partitions with their configuration as the key. Type: attribute set of (submodule) Default: { } Example: { "10-esp" = { contents = { "/EFI/BOOT/BOOTX64.EFI".source = "${pkgs.systemd}/lib/systemd/boot/efi/systemd-bootx64.efi"; } repartConfig = { Type = "esp"; Format = "vfat"; }; }; "20-root" = { storePaths = [ config.system.build.toplevel ]; repartConfig = { Type = "root"; Format = "ext4"; Minimize = "guess"; }; }; }; Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.sectorSize

The sector size of the disk image produced by systemd-repart. This value must be a power of 2 between 512 and 4096. Type: null or signed integer Default: 512 Example: 4096 Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.seed

A UUID to use as a seed. You can set this to random to explicitly randomize the partition UUIDs. See systemd-repart(8) for more information. Type: null or string Default: "0867da16-f251-457d-a9e8-c31f9a3c220b" Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.split

Enables generation of split artifacts from partitions. If enabled, for each partition with SplitName= set, a separate output file containing just the contents of that partition is generated. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/image/repart.nix>

## image.repart.version

Version of the image Type: null or string Default: config.system.image.version Declared by: <nixpkgs/nixos/modules/image/repart.nix>
