---
module: services.yandex-disk
option_count: 6
source: options.html
---

# services.yandex-disk

## services.yandex-disk.enable

Whether to enable Yandex-disk client. See https://disk.yandex.ru/ Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/yandex-disk.nix>

## services.yandex-disk.directory

The directory to use for Yandex.Disk storage Type: absolute path Default: "/home/Yandex.Disk" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/yandex-disk.nix>

## services.yandex-disk.excludes

Comma-separated list of directories which are excluded from synchronization. Type: strings concatenated with “,” Default: "" Example: "data,backup" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/yandex-disk.nix>

## services.yandex-disk.password

Your yandex.com password. Warning: it will be world-readable in /nix/store. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/yandex-disk.nix>

## services.yandex-disk.user

The user the yandex-disk daemon should run as. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/network-filesystems/yandex-disk.nix>

## services.yandex-disk.username

Your yandex.com login name. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/yandex-disk.nix>
