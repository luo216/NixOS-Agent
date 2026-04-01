---
module: services.hadoop.yarn.resourcemanager
option_count: 5
source: options.html
---

# services.hadoop.yarn.resourcemanager

## services.hadoop.yarn.resourcemanager.enable

Whether to enable Hadoop YARN ResourceManager. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.resourcemanager.extraEnv

Extra environment variables Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.resourcemanager.extraFlags

Extra command line flags to pass to the service Type: list of string Default: [ ] Example: [ "-Dcom.sun.management.jmxremote" "-Dcom.sun.management.jmxremote.port=8010" ] Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.resourcemanager.openFirewall

Open firewall ports for resourcemanager Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.resourcemanager.restartIfChanged

Automatically restart the service on config change. This can be set to false to defer restarts on clusters running critical applications. Please consider the security implications of inadvertently running an older version, and the possibility of unexpected behavior caused by inconsistent versions across a cluster when disabling this option. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>
