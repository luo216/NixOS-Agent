---
module: services.grafana.provision.alerting.templates
option_count: 2
source: options.html
---

# services.grafana.provision.alerting.templates

## services.grafana.provision.alerting.templates.path

Path to YAML templates configuration. Can’t be used with services.grafana.provision.alerting.templates.settings simultaneously. Can be either a directory or a single YAML file. Will end up in the store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.alerting.templates.settings

Grafana templates configuration in Nix. Can’t be used with services.grafana.provision.alerting.templates.path simultaneously. See https://grafana.com/docs/grafana/latest/administration/provisioning/#templates for supported options. Type: null or (submodule) Default: null Example: { apiVersion = 1; templates = [{ orgId = 1; name = "my_first_template"; template = "Alerting with a custom text template"; }]; deleteTemplates = [{ orgId = 1; name = "my_first_template"; }]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
