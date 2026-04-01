---
module: boot.initrd.luks.devices.<name>
option_count: 15
source: options.html
---

# boot.initrd.luks.devices.<name>

## boot.initrd.luks.devices.<name>.allowDiscards

Whether to allow TRIM requests to the underlying device. This option has security implications; please read the LUKS documentation before activating it. This option is incompatible with authenticated encryption (dm-crypt stacked over dm-integrity). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.bypassWorkqueues

Whether to bypass dm-crypt’s internal read and write workqueues. Enabling this should improve performance on SSDs; see here for more information. Needs Linux 5.9 or later. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.device

Path of the underlying encrypted block device. Type: string Example: "/dev/disk/by-uuid/430e9eff-d852-4f68-aa3b-2fa3599ebe08" Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.fallbackToPassword

Whether to fallback to interactive passphrase prompt if the keyfile cannot be found. This will prevent unattended boot should the keyfile go missing. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.gpgCard

The option to use this LUKS device with a GPG encrypted luks password by the GPG Smartcard. If null (the default), GPG-Smartcard will be disabled for this device. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.header

The name of the file or block device that should be used as header for the encrypted device. Type: null or string Default: null Example: "/root/header.img" Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.keyFile

The name of the file (can be a raw device or a partition) that should be used as the decryption key for the encrypted device. If not specified, you will be prompted for a passphrase instead. Type: null or string Default: null Example: "/dev/sdb1" Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.keyFileOffset

The offset of the key file. Use this in combination with keyFileSize to use part of a file as key file (often the case if a raw device or partition is used as a key file). If not specified, the key begins at the first byte of keyFile. Type: null or signed integer Default: null Example: 4096 Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.keyFileSize

The size of the key file. Use this if only the beginning of the key file should be used as a key (often the case if a raw device or partition is used as key file). If not specified, the whole keyFile will be used decryption, instead of just the first keyFileSize bytes. Type: null or signed integer Default: null Example: 4096 Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.keyFileTimeout

The amount of time in seconds for a keyFile to appear before timing out and trying passwords. Type: null or signed integer Default: null Example: 5 Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.postOpenCommands

Commands that should be run right after we have mounted our LUKS device. Type: strings concatenated with “\n” Default: "" Example: '' umount /tmp/persistent '' Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.preLVM

Whether the luksOpen will be attempted before LVM scan or after it. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.preOpenCommands

Commands that should be run right before we try to mount our LUKS device. This can be useful, if the keys needed to open the drive is on another partition. Type: strings concatenated with “\n” Default: "" Example: '' mkdir -p /tmp/persistent mount -t zfs rpool/safe/persistent /tmp/persistent '' Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.tryEmptyPassphrase

If keyFile fails then try an empty passphrase first before prompting for password. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>

## boot.initrd.luks.devices.<name>.yubikey

The options to use for this LUKS device in YubiKey-PBA. If null (the default), YubiKey-PBA will be disabled for this device. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/system/boot/luksroot.nix>
