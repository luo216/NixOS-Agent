---
module: services.grafana.provision.alerting.policies
option_count: 2
source: options.html
---

# services.grafana.provision.alerting.policies

## services.grafana.provision.alerting.policies.path

Path to YAML notification policies configuration. Can’t be used with services.grafana.provision.alerting.policies.settings simultaneously. Can be either a directory or a single YAML file. Will end up in the store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.alerting.policies.settings

Grafana notification policies configuration in Nix. Can’t be used with services.grafana.provision.alerting.policies.path simultaneously. See https://grafana.com/docs/grafana/latest/administration/provisioning/#notification-policies for supported options. Type: null or (submodule) Default: null Example: { apiVersion = 1; policies = [{ orgId = 1; receiver = "grafana-default-email"; group_by = [ "..." ]; matchers = [ "alertname = Watchdog" "severity =~ \"warning|critical\"" ]; mute_time_intervals = [ "abc" ]; group_wait = "30s"; group_interval = "5m"; repeat_interval = "4h"; }]; resetPolicies = [ 1 ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
