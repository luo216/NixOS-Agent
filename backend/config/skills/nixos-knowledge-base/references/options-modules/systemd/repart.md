---
module: systemd.repart
option_count: 2
source: options.html
---

# systemd.repart

## systemd.repart.enable

Grow and add partitions to a partition table. systemd-repart only works with GPT partition tables. To run systemd-repart while in the initrd, see options.boot.initrd.systemd.repart.enable. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/system/boot/systemd/repart.nix>

## systemd.repart.partitions

Specify partitions as a set of the names of the definition files as the key and the partition configuration as its value. The partition configuration can use all upstream options. See repart.d(5) for all available options. Type: attribute set of attribute set of (string or signed integer or boolean or list of string) Default: { } Example: { "10-root" = { Type = "root"; }; "20-home" = { SizeMaxBytes = "2G"; SizeMinBytes = "512M"; Type = "home"; }; } Declared by: <nixpkgs/nixos/modules/system/boot/systemd/repart.nix>
