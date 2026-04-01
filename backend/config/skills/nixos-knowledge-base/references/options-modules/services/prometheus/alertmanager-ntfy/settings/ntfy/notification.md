---
module: services.prometheus.alertmanager-ntfy.settings.ntfy.notification
option_count: 3
source: options.html
---

# services.prometheus.alertmanager-ntfy.settings.ntfy.notification

## services.prometheus.alertmanager-ntfy.settings.ntfy.notification.priority

The ntfy.sh message priority (see https://docs.ntfy.sh/publish/#message-priority for more information). Can either be a hardcoded string or a gval expression that evaluates to a string. Type: string Default: "status == \"firing\" ? \"high\" : \"default\"" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-ntfy.nix>

## services.prometheus.alertmanager-ntfy.settings.ntfy.notification.tags

Tags to add to ntfy.sh messages. See https://docs.ntfy.sh/publish/#tags-emojis for more information. Type: list of (submodule) Default: [ { condition = "status == \"resolved\""; tag = "green_circle"; } { condition = "status == \"firing\""; tag = "red_circle"; } ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-ntfy.nix>

## services.prometheus.alertmanager-ntfy.settings.ntfy.notification.topic

Note: when using ntfy.sh and other public instances it is recommended to set this option to an empty string and set the actual topic via services.prometheus.alertmanager-ntfy.extraConfigFiles since the topic in ntfy.sh is essentially a password. The topic to which alerts should be published. Can either be a hardcoded string or a gval expression that evaluates to a string. Type: string Example: "alertmanager" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-ntfy.nix>
