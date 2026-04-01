---
module: boot.loader.grub.users.<name>
option_count: 4
source: options.html
---

# boot.loader.grub.users.<name>

## boot.loader.grub.users.<name>.hashedPassword

Specifies the password hash for the account, generated with grub-mkpasswd-pbkdf2. This hash will be copied to the Nix store, and will be visible to all local users. Type: null or string Default: null Example: "grub.pbkdf2.sha512.10000.674DFFDEF76E13EA...2CC972B102CF4355" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.users.<name>.hashedPasswordFile

Specifies the path to a file containing the password hash for the account, generated with grub-mkpasswd-pbkdf2. This hash will be stored in /boot/grub/grub.cfg, and will be visible to any local user who can read this file. Type: null or string Default: null Example: "/path/to/file" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.users.<name>.password

Specifies the clear text password for the account. This password will be copied to the Nix store, and will be visible to all local users. Type: null or string Default: null Example: "Pa$$w0rd!" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>

## boot.loader.grub.users.<name>.passwordFile

Specifies the path to a file containing the clear text password for the account. This password will be stored in /boot/grub/grub.cfg, and will be visible to any local user who can read this file. Type: null or string Default: null Example: "/path/to/file" Declared by: <nixpkgs/nixos/modules/system/boot/loader/grub/grub.nix>
