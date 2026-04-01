---
module: services.orangefs.server
option_count: 9
source: options.html
---

# services.orangefs.server

## services.orangefs.server.enable

Whether to enable OrangeFS server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.BMIModules

List of BMI modules to load. Type: list of string Default: [ "bmi_tcp" ] Example: [ "bmi_tcp" "bmi_ib" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.dataStorageSpace

Directory for data storage. Type: null or string Default: null Example: "/data/storage" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.extraConfig

Extra config for the global section. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.extraDefaults

Extra config for <Defaults> section. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.fileSystems

These options will create the <FileSystem> sections of config file. Type: attribute set of (submodule) Default: { orangefs = { }; } Example: { fs1 = { id = 101; }; fs2 = { id = 102; }; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.logType

Destination for log messages. Type: one of “file”, “syslog” Default: "syslog" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.metadataStorageSpace

Directory for meta data storage. Type: null or string Default: null Example: "/data/meta" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>

## services.orangefs.server.servers

URLs for storage server including port. The attribute names define the server alias. Type: attribute set of string Default: { } Example: { node1 = "tcp://node1:3334"; node2 = "tcp://node2:3334"; } Declared by: <nixpkgs/nixos/modules/services/network-filesystems/orangefs/server.nix>
