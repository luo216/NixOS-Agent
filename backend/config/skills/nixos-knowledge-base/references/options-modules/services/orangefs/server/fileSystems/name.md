---
module: services.orangefs.server.fileSystems.<name>
option_count: 6
source: options.html
---

# services.orangefs.server.fileSystems.<name>

## services.orangefs.server.fileSystems.<name>.extraConfig

Extra config for <FileSystem> section. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.fileSystems.<name>.extraStorageHints

Extra config for <StorageHints> section. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.fileSystems.<name>.id

File system ID (must be unique within configuration). Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.fileSystems.<name>.rootHandle

File system root ID. Type: signed integer Default: 3 Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.fileSystems.<name>.troveSyncData

Sync data. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.fileSystems.<name>.troveSyncMeta

Sync meta data. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>
