---
module: services.prometheus
option_count: 22
source: options.html
---

# services.prometheus

## services.prometheus.enable

Whether to enable Prometheus monitoring daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.enableAgentMode

Whether to enable agent mode. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.enableReload

Reload prometheus when configuration file changes (instead of restart). The following property holds: switching to a configuration (switch-to-configuration) that changes the prometheus configuration only finishes successfully when prometheus has finished loading the new configuration. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.package

The prometheus package to use. Type: package Default: pkgs.prometheus Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.alertmanagerNotificationQueueCapacity

The capacity of the queue for pending alert manager notifications. Type: signed integer Default: 10000 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.alertmanagers

A list of alertmanagers to send alerts to. See the official documentation for more information. Type: list of (attribute set) Default: [ ] Example: [ { scheme = "https"; path_prefix = "/alertmanager"; static_configs = [ { targets = [ "prometheus.domain.tld" ]; } ]; } ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.checkConfig

Check configuration with promtool check. The call to promtool is subject to sandboxing by Nix. If you use credentials stored in external files (password_file, bearer_token_file, etc), they will not be visible to promtool and it will report errors, despite a correct configuration. To resolve this, you may set this option to "syntax-only" in order to only syntax check the Prometheus configuration. Type: boolean or value “syntax-only” (singular enum) Default: true Example: "syntax-only" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.configText

If non-null, this option defines the text that is written to prometheus.yml. If null, the contents of prometheus.yml is generated from the structured config options. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.exporters

Prometheus exporter configuration Type: submodule Default: { } Example: { node = { enable = true; enabledCollectors = [ "systemd" ]; }; varnish.enable = true; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.extraFlags

Extra commandline options when launching Prometheus. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.globalConfig

Parameters that are valid in all configuration contexts. They also serve as defaults for other configuration sections Type: submodule Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.listenAddress

Address to listen on for the web interface, API, and telemetry. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9090 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteRead

Parameters of the endpoints to query from. See the official documentation for more information. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.remoteWrite

Parameters of the endpoints to send samples to. See the official documentation for more information. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.retentionTime

How long to retain samples in storage. Type: null or string Default: null Example: "15d" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.ruleFiles

Any additional rules files to include in this configuration. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.rules

Alerting and/or Recording rules to evaluate at runtime. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.scrapeConfigs

A list of scrape configurations. Type: list of (submodule) Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.stateDir

Directory below /var/lib to store Prometheus metrics data. This directory will be created automatically using systemd’s StateDirectory mechanism. Type: string Default: "prometheus2" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.webConfigFile

Specifies which file should be used as web.config.file and be passed on startup. See https://prometheus.io/docs/prometheus/latest/configuration/https/ for valid options. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>

## services.prometheus.webExternalUrl

The URL under which Prometheus is externally reachable (for example, if Prometheus is served via a reverse proxy). Type: null or string Default: null Example: "https://example.com/" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/default.nix>
