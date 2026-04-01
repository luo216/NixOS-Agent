---
module: services.prometheus.exporters.nextcloud
option_count: 14
source: options.html
---

# services.prometheus.exporters.nextcloud

## services.prometheus.exporters.nextcloud.enable

Whether to enable the prometheus nextcloud exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.extraFlags

Extra commandline options to pass to the nextcloud exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.nextcloud.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9205" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.nextcloud.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9205 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.group

Group under which the nextcloud exporter shall be run. Type: string Default: "nextcloud-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.passwordFile

File containing the password for connecting to Nextcloud. Make sure that this file is readable by the exporter user. Type: null or absolute path Default: null Example: "/path/to/password-file" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9205 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.timeout

Timeout for getting server info document. Type: string Default: "5s" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.tokenFile

File containing the token for connecting to Nextcloud. Make sure that this file is readable by the exporter user. Type: null or absolute path Default: null Example: "/path/to/token-file" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.url

URL to the Nextcloud serverinfo page. Adding the path to the serverinfo API is optional, it defaults to /ocs/v2.php/apps/serverinfo/api/v1/info. Type: string Example: "https://domain.tld" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.user

User name under which the nextcloud exporter shall be run. Type: string Default: "nextcloud-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.nextcloud.username

Username for connecting to Nextcloud. Note that this account needs to have admin privileges in Nextcloud. Unused when using token authentication. Type: string Default: "nextcloud-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
