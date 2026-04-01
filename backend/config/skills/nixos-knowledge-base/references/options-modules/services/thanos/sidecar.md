---
module: services.thanos.sidecar
option_count: 7
source: options.html
---

# services.thanos.sidecar

## services.thanos.sidecar.enable

Whether to enable the Thanos sidecar for Prometheus server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.sidecar.arguments

Arguments to the thanos sidecar command. Defaults to a list of arguments formed by converting the structured options of services.thanos.sidecar to a list of arguments. Overriding this option will cause none of the structured options to have any effect. So only set this if you know what you’re doing! Type: list of string Default: calculated from config.services.thanos.sidecar Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.sidecar.grpc-address

Listen ip:port address for gRPC endpoints (StoreAPI). Make sure this address is routable from other components. Defaults to 0.0.0.0:10901 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.sidecar.grpc-server-tls-cert

TLS Certificate for gRPC server, leave blank to disable TLS Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.sidecar.grpc-server-tls-client-ca

TLS CA to verify clients against. If no client CA is specified, there is no client verification on server side. (tls.NoClientCert) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.sidecar.grpc-server-tls-key

TLS Key for the gRPC server, leave blank to disable TLS Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.sidecar.http-address

Listen host:port for HTTP endpoints. Defaults to 0.0.0.0:10902 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
