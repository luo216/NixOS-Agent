---
module: services.openafsServer
option_count: 7
source: options.html
---

# services.openafsServer

## services.openafsServer.enable

Whether to enable the OpenAFS server. An OpenAFS server needs a complex setup. So, be aware that enabling this service and setting some options does not give you a turn-key-ready solution. You need at least a running Kerberos 5 setup, as OpenAFS relies on it for authentication. See the Guide “QuickStartUnix” coming with pkgs.openafs.doc for complete setup instructions. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.package

The openafs package to use. Type: package Default: pkgs.openafs Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.advertisedAddresses

List of IP addresses this server is advertised under. See NetInfo(5) Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.cellName

Cell name, this server will serve. Type: string Default: "" Example: "grand.central.org" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.cellServDB

Definition of all cell-local database server machines. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.dottedPrincipals

If enabled, allow principal names containing (.) dots. Enabling this has security implications! Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.udpPacketSize

UDP packet size to use in Bytes. Higher values can speed up communications. The default of 1 MB is a sufficient in most cases. Make sure to increase the kernel’s UDP buffer size accordingly via net.core(w|r|opt)mem_max sysctl. Type: signed integer Default: 1310720 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>
