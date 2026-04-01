---
module: services.prometheus.remoteRead.*
option_count: 11
source: options.html
---

# services.prometheus.remoteRead.*

## services.prometheus.remoteRead.*.basic_auth

Sets the Authorization header on every remote read request with the configured username and password. password and password_file are mutually exclusive. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteRead.*.bearer_token

Sets the Authorization header on every remote read request with the configured bearer token. It is mutually exclusive with bearer_token_file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteRead.*.bearer_token_file

Sets the Authorization header on every remote read request with the bearer token read from the configured file. It is mutually exclusive with bearer_token. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteRead.*.headers

Custom HTTP headers to be sent along with each remote read request. Be aware that headers that are set by Prometheus itself can’t be overwritten. Type: null or (attribute set of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteRead.*.name

Name of the remote read config, which if specified must be unique among remote read configs. The name will be used in metrics and logging in place of a generated value to help users distinguish between remote read configs. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteRead.*.proxy_url

Optional Proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteRead.*.read_recent

Whether reads should be made for queries for time ranges that the local storage should have complete data for. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteRead.*.remote_timeout

Timeout for requests to the remote read endpoint. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteRead.*.required_matchers

An optional list of equality matchers which have to be present in a selector to query the remote read endpoint. Type: null or (attribute set of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteRead.*.tls_config

Configures the remote read request’s TLS settings. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteRead.*.url

ServerName extension to indicate the name of the server. http://tools.ietf.org/html/rfc4366#section-3.1 Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
