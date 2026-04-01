---
module: services.thanos.downsample
option_count: 3
source: options.html
---

# services.thanos.downsample

## services.thanos.downsample.enable

Whether to enable the Thanos downsampler which continuously downsamples blocks in an object store bucket. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.downsample.arguments

Arguments to the thanos downsample command. Defaults to a list of arguments formed by converting the structured options of services.thanos.downsample to a list of arguments. Overriding this option will cause none of the structured options to have any effect. So only set this if you know what you’re doing! Type: list of string Default: calculated from config.services.thanos.downsample Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.downsample.stateDir

Data directory relative to /var/lib in which to cache blocks and process downsamplings. Type: string Default: "thanos-downsample" Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
