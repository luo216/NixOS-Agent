---
module: services.druid.historical.segmentLocations.*
option_count: 3
source: options.html
---

# services.druid.historical.segmentLocations.*

## services.druid.historical.segmentLocations.*.freeSpacePercent

Druid Historical will fail to write if it exceeds this value Type: floating point number Default: 1.0 Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.historical.segmentLocations.*.maxSize

Max size the druid historical can occupy Type: string Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>

## services.druid.historical.segmentLocations.*.path

the path to store the segments Type: absolute path Declared by: <nixpkgs/nixos/modules/services/cluster/druid/default.nix>
