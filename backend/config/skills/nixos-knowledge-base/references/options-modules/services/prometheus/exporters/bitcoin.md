---
module: services.prometheus.exporters.bitcoin
option_count: 17
source: options.html
---

# services.prometheus.exporters.bitcoin

## services.prometheus.exporters.bitcoin.enable

Whether to enable the prometheus bitcoin exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.package

The prometheus-bitcoin-exporter package to use. Type: package Default: pkgs.prometheus-bitcoin-exporter Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.extraEnv

Extra environment variables for the exporter. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.extraFlags

Extra commandline options to pass to the bitcoin exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.bitcoin.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9332" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.bitcoin.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9332 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.group

Group under which the bitcoin exporter shall be run. Type: string Default: "bitcoin-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9332 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.refreshSeconds

How often to ask bitcoind for metrics. Type: unsigned integer, meaning >=0 Default: 300 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.rpcHost

RPC host. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.rpcPasswordFile

File containing RPC password. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.rpcPort

RPC port number. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8332 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.rpcScheme

Whether to connect to bitcoind over http or https. Type: one of “http”, “https” Default: "http" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.rpcUser

RPC user name. Type: string Default: "bitcoinrpc" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.bitcoin.user

User name under which the bitcoin exporter shall be run. Type: string Default: "bitcoin-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
