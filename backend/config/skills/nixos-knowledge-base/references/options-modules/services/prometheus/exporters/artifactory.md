---
module: services.prometheus.exporters.artifactory
option_count: 13
source: options.html
---

# services.prometheus.exporters.artifactory

## services.prometheus.exporters.artifactory.enable

Whether to enable the prometheus artifactory exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.artiAccessToken

Access token for authentication against JFrog Artifactory API. One of the password or access token needs to be set. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.artiPassword

Password for authentication against JFrog Artifactory API. One of the password or access token needs to be set. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.artiUsername

Username for authentication against JFrog Artifactory API. Type: string Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.extraFlags

Extra commandline options to pass to the artifactory exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.artifactory.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9531" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.artifactory.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9531 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.group

Group under which the artifactory exporter shall be run. Type: string Default: "artifactory-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9531 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.scrapeUri

URI on which to scrape JFrog Artifactory. Type: string Default: "http://localhost:8081/artifactory" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.artifactory.user

User name under which the artifactory exporter shall be run. Type: string Default: "artifactory-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
