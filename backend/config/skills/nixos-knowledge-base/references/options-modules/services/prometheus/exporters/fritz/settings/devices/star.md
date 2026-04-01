---
module: services.prometheus.exporters.fritz.settings.devices.*
option_count: 5
source: options.html
---

# services.prometheus.exporters.fritz.settings.devices.*

## services.prometheus.exporters.fritz.settings.devices.*.host_info

Enable extended host info for this device. Warning: This will heavily increase scrape time. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritz.settings.devices.*.hostname

Hostname under which the target device is reachable. Type: string Default: "fritz.box" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritz.settings.devices.*.name

Name to use for the device. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritz.settings.devices.*.password_file

Path to a file which contains the password to authenticate with the target device. Needs to be readable by the user the exporter runs under. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.fritz.settings.devices.*.username

Username to authenticate with the target device. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
