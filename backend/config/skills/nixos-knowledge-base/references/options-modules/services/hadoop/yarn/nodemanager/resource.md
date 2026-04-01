---
module: services.hadoop.yarn.nodemanager.resource
option_count: 4
source: options.html
---

# services.hadoop.yarn.nodemanager.resource

## services.hadoop.yarn.nodemanager.resource.cpuVCores

Number of vcores that can be allocated for containers. Type: null or (positive integer, meaning >0) Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.nodemanager.resource.maximumAllocationMB

The maximum physical memory any container can be allocated. Type: null or (positive integer, meaning >0) Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.nodemanager.resource.maximumAllocationVCores

The maximum virtual CPU cores any container can be allocated. Type: null or (positive integer, meaning >0) Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>

## services.hadoop.yarn.nodemanager.resource.memoryMB

Amount of physical memory, in MB, that can be allocated for containers. Type: null or (positive integer, meaning >0) Default: null Declared by: <nixpkgs/nixos/modules/services/cluster/hadoop/yarn.nix>
