---
module: services.prometheus.exporters.dovecot
option_count: 12
source: options.html
---

# services.prometheus.exporters.dovecot

## services.prometheus.exporters.dovecot.enable

Whether to enable the prometheus dovecot exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dovecot.extraFlags

Extra commandline options to pass to the dovecot exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dovecot.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.dovecot.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9166" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dovecot.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.dovecot.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9166 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dovecot.group

Group under which the dovecot exporter shall be run. Type: string Default: "dovecot-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dovecot.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dovecot.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dovecot.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9166 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dovecot.scopes

Stats scopes to query. Type: list of string Default: [ "user" ] Example: [ "user" "global" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dovecot.socketPath

Path under which the stats socket is placed. The user/group under which the exporter runs, should be able to access the socket in order to scrape the metrics successfully. Please keep in mind that the stats module has changed in Dovecot 2.3+ which is not compatible with this exporter. The following extra config has to be passed to Dovecot to ensure that recent versions work with this exporter: { services.prometheus.exporters.dovecot.enable = true; services.prometheus.exporters.dovecot.socketPath = "/var/run/dovecot2/old-stats"; services.dovecot2.mailPlugins.globally.enable = [ "old_stats" ]; services.dovecot2.extraConfig = '' service old-stats { unix_listener old-stats { user = dovecot-exporter group = dovecot-exporter mode = 0660 } fifo_listener old-stats-mail { mode = 0660 user = dovecot group = dovecot } fifo_listener old-stats-user { mode = 0660 user = dovecot group = dovecot } } plugin { old_stats_refresh = 30 secs old_stats_track_cmds = yes } ''; } Type: absolute path Default: "/var/run/dovecot/stats" Example: "/var/run/dovecot2/old-stats" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dovecot.telemetryPath

Path under which to expose metrics. Type: string Default: "/metrics" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dovecot.user

User name under which the dovecot exporter shall be run. Type: string Default: "dovecot-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
