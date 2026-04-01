---
module: services.openafsServer.roles.fileserver
option_count: 5
source: options.html
---

# services.openafsServer.roles.fileserver

## services.openafsServer.roles.fileserver.enable

Fileserver role, serves files and volumes from its local storage. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.roles.fileserver.fileserverArgs

Arguments to the dafileserver process. See its man page. Type: string Default: "-vattachpar 128 -vhashsize 11 -L -rxpck 400 -cb 1000000" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.roles.fileserver.salvagerArgs

Arguments to the dasalvager process. See its man page. Type: string Default: "" Example: "-showlog -showmounts" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.roles.fileserver.salvageserverArgs

Arguments to the salvageserver process. See its man page. Type: string Default: "" Example: "-showlog" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.roles.fileserver.volserverArgs

Arguments to the davolserver process. See its man page. Type: string Default: "" Example: "-sync never" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>
