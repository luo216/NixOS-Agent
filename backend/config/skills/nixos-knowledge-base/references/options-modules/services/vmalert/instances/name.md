---
module: services.vmalert.instances.<name>
option_count: 3
source: options.html
---

# services.vmalert.instances.<name>

## services.vmalert.instances.<name>.enable

Wether to enable VictoriaMetrics’s vmalert. vmalert evaluates alerting and recording rules against a data source, sends notifications via Alertmanager. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/vmalert.nix>

## services.vmalert.instances.<name>.rules

A list of the given alerting or recording rules against configured "datasource.url" compatible with Prometheus HTTP API for vmalert to execute. Refer to https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/app/vmalert/README.md#rules for details on supported values. Type: YAML 1.1 value Default: { } Example: { group = [ { name = "TestGroup"; rules = [ { alert = "ExampleAlertAlwaysFiring"; expr = '' sum by(job) (up == 1) ''; } ]; } ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/vmalert.nix>

## services.vmalert.instances.<name>.settings

vmalert configuration, passed via command line flags. Refer to https://github.com/VictoriaMetrics/VictoriaMetrics/blob/master/app/vmalert/README.md#configuration for details on supported values. Type: open submodule of attribute set of (boolean or signed integer or absolute path or string or list of (boolean or signed integer or absolute path or string)) Default: { } Example: { "datasource.disableKeepAlive" = true; "datasource.showURL" = false; "datasource.url" = "http://localhost:8428"; rule = [ "http://<some-server-addr>/path/to/rules" "dir/*.yaml" ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/vmalert.nix>
