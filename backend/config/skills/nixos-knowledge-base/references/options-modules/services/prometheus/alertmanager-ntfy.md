---
module: services.prometheus.alertmanager-ntfy
option_count: 4
source: options.html
---

# services.prometheus.alertmanager-ntfy

## services.prometheus.alertmanager-ntfy.enable

Whether to enable alertmanager-ntfy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-ntfy.nix>

## services.prometheus.alertmanager-ntfy.package

The alertmanager-ntfy package to use. Type: package Default: pkgs.alertmanager-ntfy Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-ntfy.nix>

## services.prometheus.alertmanager-ntfy.extraConfigFiles

Config files to merge into the settings defined in services.prometheus.alertmanager-ntfy.settings. This is useful to avoid putting secrets into the Nix store. See https://github.com/alexbakker/alertmanager-ntfy for more information. Type: list of absolute path Default: [ ] Example: [ "/run/secrets/alertmanager-ntfy.yml" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-ntfy.nix>

## services.prometheus.alertmanager-ntfy.settings

Configuration of alertmanager-ntfy. See https://github.com/alexbakker/alertmanager-ntfy for more information. Type: open submodule of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-ntfy.nix>
