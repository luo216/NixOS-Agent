---
module: services.prometheus.alertmanager-ntfy.settings.ntfy.notification.tags.*
option_count: 2
source: options.html
---

# services.prometheus.alertmanager-ntfy.settings.ntfy.notification.tags.*

## services.prometheus.alertmanager-ntfy.settings.ntfy.notification.tags.*.condition

The condition under which this tag should be added. Tags with no condition are always included. Type: null or string Default: null Example: "status == \"firing\"" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-ntfy.nix>

## services.prometheus.alertmanager-ntfy.settings.ntfy.notification.tags.*.tag

The tag to add. See https://docs.ntfy.sh/emojis for a list of all supported emojis. Type: string Example: "rotating_light" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-ntfy.nix>
