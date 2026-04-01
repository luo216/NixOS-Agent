---
module: services.hadoop.yarn.nodemanager
option_count: 8
source: options.html
---

# services.hadoop.yarn.nodemanager

## services.hadoop.yarn.nodemanager.enable

Whether to enable Hadoop YARN NodeManager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.nodemanager.addBinBash

Add /bin/bash. This is needed by the linux container executor’s launch script. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.nodemanager.extraEnv

Extra environment variables Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.nodemanager.extraFlags

Extra command line flags to pass to the service Type: list of string Default: [ ] Example: [ "-Dcom.sun.management.jmxremote" "-Dcom.sun.management.jmxremote.port=8010" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.nodemanager.localDir

List of directories to store localized files in. Type: null or (list of absolute path) Default: null Example: [ "/var/lib/hadoop/yarn/nm" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.nodemanager.openFirewall

Open firewall ports for nodemanager. Because containers can listen on any ephemeral port, TCP ports 1024–65535 will be opened. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.nodemanager.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on clusters running critical applications. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.nodemanager.useCGroups

Use cgroups to enforce resource limits on containers Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>
