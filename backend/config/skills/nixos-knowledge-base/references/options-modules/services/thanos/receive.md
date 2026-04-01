---
module: services.thanos.receive
option_count: 9
source: options.html
---

# services.thanos.receive

## services.thanos.receive.enable

Whether to enable the Thanos receiver which accept Prometheus remote write API requests and write to local tsdb. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.receive.arguments

Arguments to the thanos receive command. Defaults to a list of arguments formed by converting the structured options of services.thanos.receive to a list of arguments. Overriding this option will cause none of the structured options to have any effect. So only set this if you know what you’re doing! Type: list of string Default: calculated from config.services.thanos.receive Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.receive.grpc-address

Listen ip:port address for gRPC endpoints (StoreAPI). Make sure this address is routable from other components. Defaults to 0.0.0.0:10901 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.receive.grpc-server-tls-cert

TLS Certificate for gRPC server, leave blank to disable TLS Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.receive.grpc-server-tls-client-ca

TLS CA to verify clients against. If no client CA is specified, there is no client verification on server side. (tls.NoClientCert) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.receive.grpc-server-tls-key

TLS Key for the gRPC server, leave blank to disable TLS Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.receive.http-address

Listen host:port for HTTP endpoints. Defaults to 0.0.0.0:10902 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.receive.labels

External labels to announce. This flag will be removed in the future when handling multiple tsdb instances is added. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.receive.stateDir

Data directory relative to /var/lib of TSDB. Type: string Default: "thanos-receive" Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
