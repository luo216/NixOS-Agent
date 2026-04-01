---
module: services.prometheus.scrapeConfigs.*
option_count: 49
source: options.html
---

# services.prometheus.scrapeConfigs.*

## services.prometheus.scrapeConfigs.*.authorization

Sets the Authorization header on every scrape request with the configured credentials. Type: null or (attribute set) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.azure_sd_configs

List of Azure service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.basic_auth

Sets the Authorization header on every scrape request with the configured username and password. password and password_file are mutually exclusive. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.bearer_token

Sets the Authorization header on every scrape request with the configured bearer token. It is mutually exclusive with bearer_token_file. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.bearer_token_file

Sets the Authorization header on every scrape request with the bearer token read from the configured file. It is mutually exclusive with bearer_token. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.body_size_limit

An uncompressed response body larger than this many bytes will cause the scrape to fail. 0 means no limit. Example: 100MB. This is an experimental feature, this behaviour could change or be removed in the future. Defaults to 0 in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.consul_sd_configs

List of Consul service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.digitalocean_sd_configs

List of DigitalOcean service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dns_sd_configs

List of DNS service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.docker_sd_configs

List of Docker service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.dockerswarm_sd_configs

List of Docker Swarm service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.ec2_sd_configs

List of EC2 service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.eureka_sd_configs

List of Eureka service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.fallback_scrape_protocol

Fallback protocol to use if a scrape returns blank, unparseable, or otherwise invalid Content-Type. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.file_sd_configs

List of file service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.gce_sd_configs

List of Google Compute Engine service discovery configurations. See the relevant Prometheus configuration docs for more detail. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.hetzner_sd_configs

List of Hetzner service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.honor_labels

Controls how Prometheus handles conflicts between labels that are already present in scraped data and labels that Prometheus would attach server-side (“job” and “instance” labels, manually configured target labels, and labels generated by service discovery implementations). If honor_labels is set to “true”, label conflicts are resolved by keeping label values from the scraped data and ignoring the conflicting server-side labels. If honor_labels is set to “false”, label conflicts are resolved by renaming conflicting labels in the scraped data to “exported_<original-label>” (for example “exported_instance”, “exported_job”) and then attaching server-side labels. This is useful for use cases such as federation, where all labels specified in the target should be preserved. Defaults to false in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.honor_timestamps

honor_timestamps controls whether Prometheus respects the timestamps present in scraped data. If honor_timestamps is set to true, the timestamps of the metrics exposed by the target will be used. If honor_timestamps is set to false, the timestamps of the metrics exposed by the target will be ignored. Defaults to true in prometheus when set to null. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.http_sd_configs

List of HTTP service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.job_name

The job name assigned to scraped metrics by default. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kubernetes_sd_configs

List of Kubernetes service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.kuma_sd_configs

List of Kuma service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.label_limit

Per-scrape limit on number of labels that will be accepted for a sample. If more than this number of labels are present post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit. Defaults to 0 in prometheus when set to null. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.label_name_length_limit

Per-scrape limit on length of labels name that will be accepted for a sample. If a label name is longer than this number post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit. Defaults to 0 in prometheus when set to null. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.label_value_length_limit

Per-scrape limit on length of labels value that will be accepted for a sample. If a label value is longer than this number post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit. Defaults to 0 in prometheus when set to null. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.lightsail_sd_configs

List of Lightsail service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.linode_sd_configs

List of Linode service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.marathon_sd_configs

List of Marathon service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.metric_relabel_configs

List of metric relabel configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.metrics_path

The HTTP resource path on which to fetch metrics from targets. Defaults to /metrics in prometheus when set to null. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.nerve_sd_configs

List of AirBnB’s Nerve service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.openstack_sd_configs

List of OpenStack service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.params

Optional HTTP URL parameters. Type: null or (attribute set of list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.proxy_url

Optional proxy URL. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.puppetdb_sd_configs

List of PuppetDB service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.relabel_configs

List of relabel configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.sample_limit

Per-scrape limit on number of scraped samples that will be accepted. If more than this number of samples are present after metric relabelling the entire scrape will be treated as failed. 0 means no limit. Defaults to 0 in prometheus when set to null. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scaleway_sd_configs

List of Scaleway service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scheme

The URL scheme with which to fetch metrics from targets. Defaults to http in prometheus when set to null. Type: null or one of “http”, “https” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scrape_interval

How frequently to scrape targets from this job. Defaults to the globally configured default. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scrape_protocols

The protocols to negotiate during a scrape with the client. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.scrape_timeout

Per-target timeout when scraping this job. Defaults to the globally configured default. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.serverset_sd_configs

List of Zookeeper Serverset service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.static_configs

List of labeled target groups for this job. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.target_limit

Per-scrape config limit on number of unique targets that will be accepted. If more than this number of targets are present after target relabeling, Prometheus will mark the targets as failed without scraping them. 0 means no limit. This is an experimental feature, this behaviour could change in the future. Defaults to 0 in prometheus when set to null. Type: null or signed integer Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.tls_config

Configures the scrape request’s TLS settings. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.triton_sd_configs

List of Triton Serverset service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs.*.uyuni_sd_configs

List of Uyuni Serverset service discovery configurations. Type: null or (list of (submodule)) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
