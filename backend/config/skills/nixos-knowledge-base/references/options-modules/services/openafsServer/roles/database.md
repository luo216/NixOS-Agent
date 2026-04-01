---
module: services.openafsServer.roles.database
option_count: 3
source: options.html
---

# services.openafsServer.roles.database

## services.openafsServer.roles.database.enable

Database server role, maintains the Volume Location Database, Protection Database (and Backup Database, see backup role). There can be multiple servers in the database role for replication, which then need reliable network connection to each other. Servers in this role appear in AFSDB DNS records or the CellServDB. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.roles.database.ptserverArgs

Arguments to the ptserver process. See its man page. Type: string Default: "" Example: "-restricted -default_access S---- S-M---" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.roles.database.vlserverArgs

Arguments to the vlserver process. See its man page. Type: string Default: "" Example: "-rxbind" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>
