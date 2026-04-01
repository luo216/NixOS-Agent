---
module: services.prometheus.remoteWrite.*
option_count: 13
source: options.html
---

# services.prometheus.remoteWrite.*

## services.prometheus.remoteWrite.*.basic_auth

Sets the Authorization header on every remote write request with the configured username and password. password and password_file are mutually exclusive. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.bearer_token

Sets the Authorization header on every remote write request with the configured bearer token. It is mutually exclusive with bearer_token_file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.bearer_token_file

Sets the Authorization header on every remote write request with the bearer token read from the configured file. It is mutually exclusive with bearer_token. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.headers

Custom HTTP headers to be sent along with each remote write request. Be aware that headers that are set by Prometheus itself can’t be overwritten. Type: null or (attribute set of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.metadata_config

Configures the sending of series metadata to remote storage. Metadata configuration is subject to change at any point or be removed in future releases. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.name

Name of the remote write config, which if specified must be unique among remote write configs. The name will be used in metrics and logging in place of a generated value to help users distinguish between remote write configs. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.proxy_url

Optional Proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.queue_config

Configures the queue used to write to remote storage. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.remote_timeout

Timeout for requests to the remote write endpoint. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.sigv4

Configures AWS Signature Version 4 settings. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.tls_config

Configures the remote write request’s TLS settings. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.url

ServerName extension to indicate the name of the server. http://tools.ietf.org/html/rfc4366#section-3.1 Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite.*.write_relabel_configs

List of remote write relabel configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
