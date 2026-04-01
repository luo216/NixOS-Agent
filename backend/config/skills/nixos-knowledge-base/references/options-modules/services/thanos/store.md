---
module: services.thanos.store
option_count: 14
source: options.html
---

# services.thanos.store

## services.thanos.store.enable

Whether to enable the Thanos store node giving access to blocks in a bucket provider. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.arguments

Arguments to the thanos store command. Defaults to a list of arguments formed by converting the structured options of services.thanos.store to a list of arguments. Overriding this option will cause none of the structured options to have any effect. So only set this if you know what you’re doing! Type: list of string Default: calculated from config.services.thanos.store Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.block-sync-concurrency

Number of goroutines to use when syncing blocks from object storage. Defaults to 20 in Thanos when set to null. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.chunk-pool-size

Maximum size of concurrently allocatable bytes for chunks. Defaults to 2GB in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.grpc-address

Listen ip:port address for gRPC endpoints (StoreAPI). Make sure this address is routable from other components. Defaults to 0.0.0.0:10901 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.grpc-server-tls-cert

TLS Certificate for gRPC server, leave blank to disable TLS Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.grpc-server-tls-client-ca

TLS CA to verify clients against. If no client CA is specified, there is no client verification on server side. (tls.NoClientCert) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.grpc-server-tls-key

TLS Key for the gRPC server, leave blank to disable TLS Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.http-address

Listen host:port for HTTP endpoints. Defaults to 0.0.0.0:10902 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.index-cache-size

Maximum size of items held in the index cache. Defaults to 250MB in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.max-time

End of time range limit to serve. Thanos Store serves only blocks, which happened earlier than this value. Option can be a constant time in RFC3339 format or time duration relative to current time, such as -1d or 2h45m. Valid duration units are ms, s, m, h, d, w, y. Defaults to 9999-12-31T23:59:59Z in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.min-time

Start of time range limit to serve. Thanos Store serves only metrics, which happened later than this value. Option can be a constant time in RFC3339 format or time duration relative to current time, such as -1d or 2h45m. Valid duration units are ms, s, m, h, d, w, y. Defaults to 0000-01-01T00:00:00Z in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.stateDir

Data directory relative to /var/lib in which to cache remote blocks. Type: string Default: "thanos-store" Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.store.sync-block-duration

Repeat interval for syncing the blocks between local and remote view. Defaults to 3m in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
