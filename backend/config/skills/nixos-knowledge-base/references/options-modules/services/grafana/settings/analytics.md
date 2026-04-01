---
module: services.grafana.settings.analytics
option_count: 4
source: options.html
---

# services.grafana.settings.analytics

## services.grafana.settings.analytics.check_for_plugin_updates

When set to false, disables checking for new versions of installed plugins from https://grafana.com. When enabled, the check for a new plugin runs every 10 minutes. It will notify, via the UI, when a new plugin update exists. The check itself will not prompt any auto-updates of the plugin, nor will it send any sensitive information. Type: boolean Default: cfg.declarativePlugins == null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.analytics.check_for_updates

When set to false, disables checking for new versions of Grafana from Grafana’s GitHub repository. When enabled, the check for a new version runs every 10 minutes. It will notify, via the UI, when a new version is available. The check itself will not prompt any auto-updates of the Grafana software, nor will it send any sensitive information. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.analytics.feedback_links_enabled

Set to false to remove all feedback links from the UI. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.analytics.reporting_enabled

When enabled Grafana will send anonymous usage statistics to stats.grafana.org. No IP addresses are being tracked, only simple counters to track running instances, versions, dashboard and error counts. Counters are sent every 24 hours. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
