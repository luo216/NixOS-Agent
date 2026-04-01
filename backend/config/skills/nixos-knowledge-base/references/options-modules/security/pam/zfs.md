---
module: security.pam.zfs
option_count: 4
source: options.html
---

# security.pam.zfs

## security.pam.zfs.enable

Enable unlocking and mounting of encrypted ZFS home dataset at login. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.zfs.homes

Prefix of home datasets. This value will be concatenated with "/" + <username> in order to determine the home dataset to unlock. Type: string Default: "rpool/home" Example: "rpool/home" Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.zfs.mountRecursively

Mount child datasets of home dataset. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.zfs.noUnmount

Do not unmount home dataset on logout. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/security/pam.nix>
