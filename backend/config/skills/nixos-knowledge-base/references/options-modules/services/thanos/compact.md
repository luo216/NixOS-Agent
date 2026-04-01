---
module: services.thanos.compact
option_count: 6
source: options.html
---

# services.thanos.compact

## services.thanos.compact.enable

Whether to enable the Thanos compactor which continuously compacts blocks in an object store bucket. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.compact.arguments

Arguments to the thanos compact command. Defaults to a list of arguments formed by converting the structured options of services.thanos.compact to a list of arguments. Overriding this option will cause none of the structured options to have any effect. So only set this if you know what you’re doing! Type: list of string Default: calculated from config.services.thanos.compact Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.compact.consistency-delay

Minimum age of fresh (non-compacted) blocks before they are being processed. Malformed blocks older than the maximum of consistency-delay and 30m0s will be removed. Defaults to 30m in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.compact.http-address

Listen host:port for HTTP endpoints. Defaults to 0.0.0.0:10902 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.compact.startAt

When this option is set to a systemd.time specification the Thanos compactor will run at the specified period. When this option is null the Thanos compactor service will run continuously. So it will not exit after all compactions have been processed but wait for new work. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.compact.stateDir

Data directory relative to /var/lib in which to cache blocks and process compactions. Type: string Default: "thanos-compact" Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
