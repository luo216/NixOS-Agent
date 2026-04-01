---
module: services.syncoid.commands.<name>
option_count: 11
source: options.html
---

# services.syncoid.commands.<name>

## services.syncoid.commands.<name>.extraArgs

Extra syncoid arguments for this command. Type: list of string Default: [ ] Example: [ "--sshport 2222" ] Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commands.<name>.localSourceAllow

Permissions granted for the services.syncoid.user user for local source datasets. See https://openzfs.github.io/openzfs-docs/man/8/zfs-allow.8.html for available permissions. Defaults to services.syncoid.localSourceAllow option. Type: list of string Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commands.<name>.localTargetAllow

Permissions granted for the services.syncoid.user user for local target datasets. See https://openzfs.github.io/openzfs-docs/man/8/zfs-allow.8.html for available permissions. Make sure to include the change-key permission if you send raw encrypted datasets, the compression permission if you send raw compressed datasets, and so on. For remote target datasets you’ll have to set your remote user permissions by yourself. Type: list of string Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commands.<name>.recursive

Whether to enable the transfer of child datasets. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commands.<name>.recvOptions

Advanced options to pass to zfs recv. Options are specified without their leading dashes and separated by spaces. Type: strings concatenated with " " Default: "" Example: "ux recordsize o compression=lz4" Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commands.<name>.sendOptions

Advanced options to pass to zfs send. Options are specified without their leading dashes and separated by spaces. Type: strings concatenated with " " Default: "" Example: "Lc e" Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commands.<name>.service

Systemd configuration specific to this syncoid service. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commands.<name>.source

Source ZFS dataset. Can be either local or remote. Defaults to the attribute name. Type: string Example: "pool/dataset" Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commands.<name>.sshKey

SSH private key file to use to login to the remote system. Defaults to services.syncoid.sshKey option. Type: null or (string or absolute path convertible to it) Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commands.<name>.target

Target ZFS dataset. Can be either local («pool/dataset») or remote («user@server:pool/dataset»). Type: string Example: "user@server:pool/dataset" Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>

## services.syncoid.commands.<name>.useCommonArgs

Whether to add the configured common arguments to this command. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/backup/syncoid.nix>
