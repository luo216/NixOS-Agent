---
module: services.orangefs.client
option_count: 3
source: options.html
---

# services.orangefs.client

## services.orangefs.client.enable

Whether to enable OrangeFS client daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/client.nix>

## services.orangefs.client.extraOptions

Extra command line options for pvfs2-client. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/client.nix>

## services.orangefs.client.fileSystems

The orangefs file systems to be mounted. This option is preferred over using fileSystems directly since the pvfs client service needs to be running for it to be mounted. Type: list of (submodule) Example: [ { mountPoint = "/orangefs"; target = "tcp://server:3334/orangefs"; } ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/client.nix>
