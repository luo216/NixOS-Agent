---
module: services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*
option_count: 11
source: options.html
---

# services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*.api_server

The API server addresses. If left empty, Prometheus is assumed to run inside of the cluster and will discover API servers automatically and use the pod’s CA certificate and bearer token file at /var/run/secrets/kubernetes.io/serviceaccount/. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*.authorization

Optional Authorization header configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*.basic_auth

Optional HTTP basic authentication information. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*.follow_redirects

Configure whether HTTP requests follow HTTP 3xx redirects. Defaults to true in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*.kubeconfig_file

Optional path to a kubeconfig file. Note that api_server and kube_config are mutually exclusive. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*.namespaces

Optional namespace discovery. If omitted, all namespaces are used. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*.oauth2

Optional OAuth 2.0 configuration. Cannot be used at the same time as basic_auth or authorization. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*.proxy_url

Optional proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*.role

The Kubernetes role of entities that should be discovered. One of endpoints, service, pod, node, or ingress. Type: one of “endpoints”, “service”, “pod”, “node”, “ingress” Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*.selectors

Optional label and field selectors to limit the discovery process to a subset of available resources. See https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/ and https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ to learn more about the possible filters that can be used. Endpoints role supports pod, service and endpoints selectors, other roles only support selectors matching the role itself (e.g. node role can only contain node selectors). Note: When making decision about using field/label selector make sure that this is the best approach - it will prevent Prometheus from reusing single list/watch for all scrape configs. This might result in a bigger load on the Kubernetes API, because per each selector combination there will be additional LIST/WATCH. On the other hand, if you just want to monitor small subset of pods in large cluster it’s recommended to use selectors. Decision, if selectors should be used or not depends on the particular situation. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs.*.tls_config

TLS configuration. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
