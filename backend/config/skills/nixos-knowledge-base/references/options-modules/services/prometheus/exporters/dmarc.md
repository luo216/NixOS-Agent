---
module: services.prometheus.exporters.dmarc
option_count: 12
source: options.html
---

# services.prometheus.exporters.dmarc

## services.prometheus.exporters.dmarc.enable

Whether to enable the prometheus dmarc exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.debug

Whether to declare enable --debug. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.deduplicationMaxSeconds

How long individual report IDs will be remembered to avoid counting double delivered reports twice. Type: unsigned integer, meaning >=0 Default: "7 days (in seconds)" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.extraFlags

Extra commandline options to pass to the dmarc exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.dmarc.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9797" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.dmarc.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9797 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.group

Group under which the dmarc exporter shall be run. Type: string Default: "dmarc-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.pollIntervalSeconds

How often to poll the IMAP server in seconds. Type: unsigned integer, meaning >=0 Default: 60 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9797 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.dmarc.user

User name under which the dmarc exporter shall be run. Type: string Default: "dmarc-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
