---
module: services.u9fs
option_count: 4
source: options.html
---

# services.u9fs

## services.u9fs.enable

Whether to run the u9fs 9P server for Unix. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/u9fs.nix>

## services.u9fs.extraArgs

Extra arguments to pass on invocation, see man 4 u9fs Type: string Default: "" Example: "-a none" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/u9fs.nix>

## services.u9fs.listenStreams

Sockets to listen for clients on. See man 5 systemd.socket for socket syntax. Type: list of string Default: [ "564" ] Example: [ "192.168.16.1:564" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/u9fs.nix>

## services.u9fs.user

User to run u9fs under. Type: string Default: "nobody" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/u9fs.nix>
