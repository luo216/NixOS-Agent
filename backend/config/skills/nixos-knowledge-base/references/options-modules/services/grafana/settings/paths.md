---
module: services.grafana.settings.paths
option_count: 2
source: options.html
---

# services.grafana.settings.paths

## services.grafana.settings.paths.plugins

Directory where grafana will automatically scan and look for plugins Type: absolute path Default: if (cfg.declarativePlugins == null) then "${cfg.dataDir}/plugins" else declarativePlugins Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.settings.paths.provisioning

Folder that contains provisioning config files that grafana will apply on startup and while running. Don’t change the value of this option if you are planning to use services.grafana.provision options. Type: absolute path Default: "directory with links to files generated from services.grafana.provision" Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
