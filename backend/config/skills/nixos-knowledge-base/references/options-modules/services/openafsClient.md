---
module: services.openafsClient
option_count: 11
source: options.html
---

# services.openafsClient

## services.openafsClient.enable

Whether to enable the OpenAFS client. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.afsdb

Resolve cells via AFSDB DNS records. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.cellName

Cell name. Type: string Default: "" Example: "grand.central.org" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.cellServDB

This cell’s database server records, added to the global CellServDB. See CellServDB(5) man page for syntax. Ignored when afsdb is set to true. Type: list of (submodule) Default: [ ] Example: [ { dnsname = "first.afsdb.server.dns.fqdn.org"; ip = "1.2.3.4"; } { dnsname = "second.afsdb.server.dns.fqdn.org"; ip = "2.3.4.5"; } ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.crypt

Whether to enable (weak) protocol encryption. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.daemons

Number of daemons to serve user requests. Numbers higher than 6 usually do no increase performance. Default is sufficient for up to five concurrent users. Type: signed integer Default: 2 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.fakestat

Return fake data on stat() calls. If true, always do so. If false, only do so for cross-cell mounts (as these are potentially expensive). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.inumcalc

Inode calculation method. compat is computationally less expensive, but md5 greatly reduces the likelihood of inode collisions in larger scenarios involving multiple cells mounted into one AFS space. Type: string matching the pattern compat|md5 Default: "compat" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.mountPoint

Mountpoint of the AFS file tree, conventionally /afs. When set to a different value, only cross-cells that use the same value can be accessed. Type: string Default: "/afs" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.sparse

Minimal cell list in /afs. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>

## services.openafsClient.startDisconnected

Start up in disconnected mode. You need to execute fs disco online (as root) to switch to connected mode. Useful for roaming devices. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/client.nix>
