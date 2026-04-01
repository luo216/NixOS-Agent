---
module: services.tftpd
option_count: 2
source: options.html
---

# services.tftpd

## services.tftpd.enable

Whether to enable tftpd, a Trivial File Transfer Protocol server. The server will be run as an xinetd service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/tftpd.nix>

## services.tftpd.path

Where the tftp server files are stored. Type: absolute path Default: "/srv/tftp" Declared by: <nixpkgs/nixos/modules/services/networking/tftpd.nix>
