---
module: services.prometheus.exporters.wireguard
option_count: 16
source: options.html
---

# services.prometheus.exporters.wireguard

## services.prometheus.exporters.wireguard.enable

Whether to enable the prometheus wireguard exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.extraFlags

Extra commandline options to pass to the wireguard exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.wireguard.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9586" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.wireguard.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9586 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.group

Group under which the wireguard exporter shall be run. Type: string Default: "wireguard-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.interfaces

Specifies the interface(s) passed to the wg show <interface> dump parameter. By default all interfaces are used. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.latestHandshakeDelay

Adds the wireguard_latest_handshake_delay_seconds metric that automatically calculates the seconds passed since the last handshake. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9586 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.prependSudo

Whether or no to prepend sudo to wg commands. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.singleSubnetPerField

By default, all allowed IPs and subnets are comma-separated in the allowed_ips field. With this option enabled, a single IP and subnet will be listed in fields like allowed_ip_0, allowed_ip_1 and so on. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.user

User name under which the wireguard exporter shall be run. Type: string Default: "wireguard-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.verbose

Whether to enable verbose logging mode for prometheus-wireguard-exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.wireguardConfig

Path to the Wireguard Config to add the peer’s name to the stats of a peer. Please note that networking.wg-quick is required for this feature as networking.wireguard uses wg(8) to set the peers up. Type: null or absolute path or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.wireguard.withRemoteIp

Whether or not the remote IP of a WireGuard peer should be exposed via prometheus. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
