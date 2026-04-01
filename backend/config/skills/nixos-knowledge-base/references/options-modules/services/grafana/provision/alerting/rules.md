---
module: services.grafana.provision.alerting.rules
option_count: 2
source: options.html
---

# services.grafana.provision.alerting.rules

## services.grafana.provision.alerting.rules.path

Path to YAML rules configuration. Can’t be used with services.grafana.provision.alerting.rules.settings simultaneously. Can be either a directory or a single YAML file. Will end up in the store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>

## services.grafana.provision.alerting.rules.settings

Grafana rules configuration in Nix. Can’t be used with services.grafana.provision.alerting.rules.path simultaneously. See https://grafana.com/docs/grafana/latest/administration/provisioning/#rules for supported options. Type: null or (submodule) Default: null Example: { apiVersion = 1; groups = [{ orgId = 1; name = "my_rule_group"; folder = "my_first_folder"; interval = "60s"; rules = [{ uid = "my_id_1"; title = "my_first_rule"; condition = "A"; data = [{ refId = "A"; datasourceUid = "-100"; model = { conditions = [{ evaluator = { params = [ 3 ]; type = "git"; }; operator.type = "and"; query.params = [ "A" ]; reducer.type = "last"; type = "query"; }]; datasource = { type = "__expr__"; uid = "-100"; }; expression = "1==0"; intervalMs = 1000; maxDataPoints = 43200; refId = "A"; type = "math"; }; }]; dashboardUid = "my_dashboard"; panelId = 123; noDataState = "Alerting"; for = "60s"; annotations.some_key = "some_value"; labels.team = "sre_team1"; }]; }]; deleteRules = [{ orgId = 1; uid = "my_id_1"; }]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/grafana.nix>
