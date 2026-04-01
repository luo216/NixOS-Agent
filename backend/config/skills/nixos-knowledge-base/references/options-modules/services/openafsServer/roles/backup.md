---
module: services.openafsServer.roles.backup
option_count: 6
source: options.html
---

# services.openafsServer.roles.backup

## services.openafsServer.roles.backup.enable

Whether to enable the backup server role. When using OpenAFS built-in buserver, use in conjunction with the database role to maintain the Backup Database. Normally only used in conjunction with tape storage or IBM’s Tivoli Storage Manager. For a modern backup server, enable this role and see enableFabs . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.roles.backup.enableFabs

Whether to enable FABS, the flexible AFS backup system. It stores volumes as dump files, relying on other pre-existing backup solutions for handling them . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.roles.backup.buserverArgs

Arguments to the buserver process. See its man page. Type: string Default: "" Example: "-p 8" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.roles.backup.cellServDB

Definition of all cell-local backup database server machines. Use this when your cell uses less backup database servers than other database server machines. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.roles.backup.fabsArgs

Arguments to the fabsys process. See fabsys_server(1) and fabsys_config(1). Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>

## services.openafsServer.roles.backup.fabsExtraConfig

Additional configuration parameters for the FABS backup server. Type: attribute set Default: { } Example: { afs.localauth = true; afs.keytab = config.sops.secrets.fabsKeytab.path; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/openafs/server.nix>
