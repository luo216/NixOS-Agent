---
module: services.thanos.query
option_count: 15
source: options.html
---

# services.thanos.query

## services.thanos.query.enable

Whether to enable the Thanos query node exposing PromQL enabled Query API with data retrieved from multiple store nodes. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.arguments

Arguments to the thanos query command. Defaults to a list of arguments formed by converting the structured options of services.thanos.query to a list of arguments. Overriding this option will cause none of the structured options to have any effect. So only set this if you know what you’re doing! Type: list of string Default: calculated from config.services.thanos.query Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.endpoints

Addresses of statically configured Thanos API servers (repeatable). The scheme may be prefixed with ‘dns+’ or ‘dnssrv+’ to detect Thanos API servers through respective DNS lookups. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.grpc-address

Listen ip:port address for gRPC endpoints (StoreAPI). Make sure this address is routable from other components. Defaults to 0.0.0.0:10901 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.grpc-client-server-name

Server name to verify the hostname on the returned gRPC certificates. See https://tools.ietf.org/html/rfc4366#section-3.1 Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.grpc-client-tls-ca

TLS CA Certificates to use to verify gRPC servers Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.grpc-client-tls-cert

TLS Certificates to use to identify this client to the server Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.grpc-client-tls-key

TLS Key for the client’s certificate Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.grpc-client-tls-secure

Use TLS when talking to the gRPC server Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.grpc-compression

Compression algorithm to use for gRPC requests to other clients. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.grpc-server-tls-cert

TLS Certificate for gRPC server, leave blank to disable TLS Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.grpc-server-tls-client-ca

TLS CA to verify clients against. If no client CA is specified, there is no client verification on server side. (tls.NoClientCert) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.grpc-server-tls-key

TLS Key for the gRPC server, leave blank to disable TLS Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.http-address

Listen host:port for HTTP endpoints. Defaults to 0.0.0.0:10902 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.query.selector-labels

Query selector labels that will be exposed in info endpoint. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
