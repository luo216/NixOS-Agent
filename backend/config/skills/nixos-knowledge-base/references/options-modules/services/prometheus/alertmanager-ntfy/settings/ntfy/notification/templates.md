---
module: services.prometheus.alertmanager-ntfy.settings.ntfy.notification.templates
option_count: 2
source: options.html
---

# services.prometheus.alertmanager-ntfy.settings.ntfy.notification.templates

## services.prometheus.alertmanager-ntfy.settings.ntfy.notification.templates.description

The ntfy.sh message description template. Type: string Default: '' {{ index .Annotations "description" }} '' Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-ntfy.nix>

## services.prometheus.alertmanager-ntfy.settings.ntfy.notification.templates.title

The ntfy.sh message title template. Type: string Default: '' {{ if eq .Status "resolved" }}Resolved: {{ end }}{{ index .Annotations "summary" }} '' Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-ntfy.nix>
