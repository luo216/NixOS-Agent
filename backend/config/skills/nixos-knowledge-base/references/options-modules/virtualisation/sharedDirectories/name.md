---
module: virtualisation.sharedDirectories.<name>
option_count: 3
source: options.html
---

# virtualisation.sharedDirectories.<name>

## virtualisation.sharedDirectories.<name>.securityModel

The security model to use for this share: passthrough: files are stored using the same credentials as they are created on the guest (this requires QEMU to run as root) mapped-xattr: some of the file attributes like uid, gid, mode bits and link target are stored as file attributes mapped-file: the attributes are stored in the hidden .virtfs_metadata directory. Directories exported by this security model cannot interact with other unix tools none: same as “passthrough” except the sever won’t report failures if it fails to set file attributes like ownership Type: one of “passthrough”, “mapped-xattr”, “mapped-file”, “none” Default: "mapped-xattr" Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.sharedDirectories.<name>.source

The path of the directory to share, can be a shell variable Type: string Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>

## virtualisation.sharedDirectories.<name>.target

The mount point of the directory inside the virtual machine Type: absolute path Declared by: <nixpkgs/nixos/modules/virtualisation/qemu-vm.nix>
