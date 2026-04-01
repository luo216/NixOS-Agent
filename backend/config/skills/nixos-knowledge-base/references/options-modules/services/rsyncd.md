---
module: services.rsyncd
option_count: 4
source: options.html
---

# services.rsyncd

## services.rsyncd.enable

Whether to enable the rsync daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/rsyncd.nix>

## services.rsyncd.port

TCP port the daemon will listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 873 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/rsyncd.nix>

## services.rsyncd.settings

Configuration for rsyncd. See rsyncd.conf(5). Type: submodule Default: { } Example: { globalSection = { address = "0.0.0.0"; gid = "nobody"; "max connections" = 4; uid = "nobody"; "use chroot" = true; }; sections = { cvs = { "auth users" = [ "tridge" "susan" ]; comment = "CVS repository (requires authentication)"; path = "/data/cvs"; "secrets file" = "/etc/rsyncd.secrets"; }; ftp = { comment = "whole ftp area"; path = "/var/ftp/./pub"; }; }; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/rsyncd.nix>

## services.rsyncd.socketActivated

If enabled Rsync will be socket-activated rather than run persistently. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/rsyncd.nix>
