---
module: services.bacula-sd
option_count: 9
source: options.html
---

# services.bacula-sd

## services.bacula-sd.enable

Whether to enable Bacula Storage Daemon. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.autochanger

This option defines Autochanger resources in Bacula Storage Daemon. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.device

This option defines Device resources in Bacula Storage Daemon. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.director

This option defines Director resources in Bacula Storage Daemon. Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.extraMessagesConfig

Extra configuration to be passed in Messages directive. Type: strings concatenated with “\n” Default: "" Example: '' console = all '' Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.extraStorageConfig

Extra configuration to be passed in Storage directive. Type: strings concatenated with “\n” Default: "" Example: '' Maximum Concurrent Jobs = 20; Heartbeat Interval = 30; '' Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.name

Specifies the Name of the Storage daemon. Type: string Default: "${config.networking.hostName}-sd" Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.port

Specifies port number on which the Storage daemon listens for Director connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9103 Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>

## services.bacula-sd.tls

TLS Options for the Storage Daemon. Important notice: The backup won’t be encrypted. Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/backup/bacula.nix>
