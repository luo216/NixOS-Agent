---
module: services.prometheus.alertmanagerIrcRelay
option_count: 4
source: options.html
---

# services.prometheus.alertmanagerIrcRelay

## services.prometheus.alertmanagerIrcRelay.enable

Whether to enable Alertmanager IRC Relay. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-irc-relay.nix>

## services.prometheus.alertmanagerIrcRelay.package

The alertmanager-irc-relay package to use. Type: package Default: pkgs.alertmanager-irc-relay Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-irc-relay.nix>

## services.prometheus.alertmanagerIrcRelay.extraFlags

Extra command line options to pass to alertmanager-irc-relay. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-irc-relay.nix>

## services.prometheus.alertmanagerIrcRelay.settings

Configuration for Alertmanager IRC Relay as a Nix attribute set. For a reference, check out the example configuration and the source code. Note: The webhook’s URL MUST point to the IRC channel where the message should be posted. For #mychannel from the example, this would be http://localhost:8080/mychannel. Type: YAML 1.1 value Example: { http_host = "localhost"; http_port = 8000; irc_host = "irc.example.com"; irc_port = 7000; irc_nickname = "myalertbot"; irc_channels = [ { name = "#mychannel"; } ]; } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/alertmanager-irc-relay.nix>
