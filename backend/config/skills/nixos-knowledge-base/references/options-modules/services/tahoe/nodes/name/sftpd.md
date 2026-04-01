---
module: services.tahoe.nodes.<name>.sftpd
option_count: 4
source: options.html
---

# services.tahoe.nodes.<name>.sftpd

## services.tahoe.nodes.<name>.sftpd.enable

Whether to enable SFTP service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>

## services.tahoe.nodes.<name>.sftpd.hostPrivateKeyFile

Path to the SSH host private key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>

## services.tahoe.nodes.<name>.sftpd.hostPublicKeyFile

Path to the SSH host public key. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>

## services.tahoe.nodes.<name>.sftpd.port

The port on which the SFTP server will listen. This is the correct setting to tweak if you want Tahoe’s SFTP daemon to listen on a different port. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/network-filesystems/tahoe.nix>
