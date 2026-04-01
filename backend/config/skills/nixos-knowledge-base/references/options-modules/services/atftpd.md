---
module: services.atftpd
option_count: 3
source: options.html
---

# services.atftpd

## services.atftpd.enable

Whether to enable the atftpd TFTP server. By default, the server binds to address 0.0.0.0. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/atftpd.nix>

## services.atftpd.extraOptions

Extra command line arguments to pass to atftp. Type: list of string Default: [ ] Example: [ "--bind-address 192.168.9.1" "--verbose=7" ] Declared by: <nixpkgs/nixos/modules/services/networking/atftpd.nix>

## services.atftpd.root

Document root directory for the atftpd. Type: absolute path Default: "/srv/tftp" Declared by: <nixpkgs/nixos/modules/services/networking/atftpd.nix>
