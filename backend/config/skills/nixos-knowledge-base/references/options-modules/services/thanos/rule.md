---
module: services.thanos.rule
option_count: 11
source: options.html
---

# services.thanos.rule

## services.thanos.rule.enable

Whether to enable the Thanos ruler service which evaluates Prometheus rules against given Query nodes, exposing Store API and storing old blocks in bucket. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.arguments

Arguments to the thanos rule command. Defaults to a list of arguments formed by converting the structured options of services.thanos.rule to a list of arguments. Overriding this option will cause none of the structured options to have any effect. So only set this if you know what you’re doing! Type: list of string Default: calculated from config.services.thanos.rule Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.eval-interval

The default evaluation interval to use. Defaults to 1m in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.grpc-address

Listen ip:port address for gRPC endpoints (StoreAPI). Make sure this address is routable from other components. Defaults to 0.0.0.0:10901 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.grpc-server-tls-cert

TLS Certificate for gRPC server, leave blank to disable TLS Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.grpc-server-tls-client-ca

TLS CA to verify clients against. If no client CA is specified, there is no client verification on server side. (tls.NoClientCert) Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.grpc-server-tls-key

TLS Key for the gRPC server, leave blank to disable TLS Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.http-address

Listen host:port for HTTP endpoints. Defaults to 0.0.0.0:10902 in Thanos when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.labels

Labels to be applied to all generated metrics. Similar to external labels for Prometheus, used to identify ruler and its blocks as unique source. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.rule-files

Rule files that should be used by rule manager. Can be in glob format. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.stateDir

Data directory relative to /var/lib. Type: string Default: "thanos-rule" Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
