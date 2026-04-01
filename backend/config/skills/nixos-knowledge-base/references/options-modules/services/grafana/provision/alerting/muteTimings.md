---
module: services.grafana.provision.alerting.muteTimings
option_count: 2
source: options.html
---

# services.grafana.provision.alerting.muteTimings

## services.grafana.provision.alerting.muteTimings.path

Path to YAML mute timings configuration. Can’t be used with services.grafana.provision.alerting.muteTimings.settings simultaneously. Can be either a directory or a single YAML file. Will end up in the store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.alerting.muteTimings.settings

Grafana mute timings configuration in Nix. Can’t be used with services.grafana.provision.alerting.muteTimings.path simultaneously. See https://grafana.com/docs/grafana/latest/administration/provisioning/#mute-timings for supported options. Type: null or (submodule) Default: null Example: { apiVersion = 1; muteTimes = [{ orgId = 1; name = "mti_1"; time_intervals = [{ times = [{ start_time = "06:00"; end_time = "23:59"; }]; weekdays = [ "monday:wednesday" "saturday" "sunday" ]; months = [ "1:3" "may:august" "december" ]; years = [ "2020:2022" "2030" ]; days_of_month = [ "1:5" "-3:-1" ]; }]; }]; deleteMuteTimes = [{ orgId = 1; name = "mti_1"; }]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
