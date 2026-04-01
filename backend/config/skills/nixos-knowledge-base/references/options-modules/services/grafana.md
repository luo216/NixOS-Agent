---
module: services.grafana
option_count: 6
source: options.html
---

# services.grafana

## services.grafana.enable

Whether to enable grafana. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.package

The grafana package to use. Type: package Default: pkgs.grafana Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.dataDir

Data directory. Type: absolute path Default: "/var/lib/grafana" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.declarativePlugins

If non-null, then a list of packages containing Grafana plugins to install. If set, plugins cannot be manually installed. Keep in mind that this turns off drilldown: for this to work, you need to add grafana-metricsdrilldown-app, grafana-lokiexplore-app, grafana-exploretraces-app and grafana-pyroscope-app to this option. Type: null or (list of absolute path) Default: null Example: with pkgs.grafanaPlugins; [ grafana-piechart-panel ] Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.openFirewall

Open the ports in the firewall for the server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings

Grafana settings. See https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/ for available options. INI format is used. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them) Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
