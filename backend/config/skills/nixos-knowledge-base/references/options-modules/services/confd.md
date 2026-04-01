---
module: services.confd
option_count: 9
source: options.html
---

# services.confd

## services.confd.enable

Whether to enable confd, a service to manage local application configuration files using templates and data from etcd/consul/redis/zookeeper. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/confd.nix>

## services.confd.package

The confd package to use. Type: package Default: pkgs.confd Declared by: <nixpkgs/nixos/modules/services/misc/confd.nix>

## services.confd.backend

Confd config storage backend to use. Type: one of “etcd”, “consul”, “redis”, “zookeeper” Default: "etcd" Declared by: <nixpkgs/nixos/modules/services/misc/confd.nix>

## services.confd.confDir

The path to the confd configs. Type: absolute path Default: "/etc/confd" Declared by: <nixpkgs/nixos/modules/services/misc/confd.nix>

## services.confd.interval

Confd check interval. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/misc/confd.nix>

## services.confd.logLevel

Confd log level. Type: one of “info”, “debug” Default: "info" Declared by: <nixpkgs/nixos/modules/services/misc/confd.nix>

## services.confd.nodes

Confd list of nodes to connect to. Type: list of string Default: [ "http://127.0.0.1:2379" ] Declared by: <nixpkgs/nixos/modules/services/misc/confd.nix>

## services.confd.prefix

The string to prefix to keys. Type: absolute path Default: "/" Declared by: <nixpkgs/nixos/modules/services/misc/confd.nix>

## services.confd.watch

Confd, whether to watch etcd config for changes. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/confd.nix>
