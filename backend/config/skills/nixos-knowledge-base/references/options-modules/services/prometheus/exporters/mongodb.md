---
module: services.prometheus.exporters.mongodb
option_count: 15
source: options.html
---

# services.prometheus.exporters.mongodb

## services.prometheus.exporters.mongodb.enable

Whether to enable the prometheus mongodb exporter. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.collStats

List of comma separared databases.collections to get $collStats Type: list of string Default: [ ] Example: [ "db1.coll1" "db2" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.collectAll

Enable all collectors. Same as specifying all --collector.<name> Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.collector

Enabled collectors Type: list of string Default: [ ] Example: [ "diagnosticdata" "replicasetstatus" "dbstats" "topmetrics" "currentopmetrics" "indexstats" "dbstats" "profile" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.extraFlags

Extra commandline options to pass to the mongodb exporter. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.firewallFilter

Specify a filter for iptables to use when services.prometheus.exporters.mongodb.openFirewall is true. It is used as ip46tables -I nixos-fw firewallFilter -j nixos-fw-accept. Type: null or string Default: null Example: "-i eth0 -p tcp -m tcp --dport 9216" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.firewallRules

Specify rules for nftables to add to the input chain when services.prometheus.exporters.mongodb.openFirewall is true. Type: null or strings concatenated with “\n” Default: null Example: iifname "eth0" tcp dport 9216 counter accept Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.group

Group under which the mongodb exporter shall be run. Type: string Default: "mongodb-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.indexStats

List of comma separared databases.collections to get $indexStats Type: list of string Default: [ ] Example: [ "db1.coll1" "db2" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.listenAddress

Address to listen on. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.openFirewall

Open port in firewall for incoming connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.port

Port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9216 Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.telemetryPath

Metrics expose path Type: string Default: "/metrics" Example: "/metrics" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.uri

MongoDB URI to connect to. Type: string Default: "mongodb://localhost:27017/test" Example: "mongodb://localhost:27017/test" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>

## services.prometheus.exporters.mongodb.user

User name under which the mongodb exporter shall be run. Type: string Default: "mongodb-exporter" Declared by: <nixpkgs/nixos/modules/services/monitoring/prometheus/exporters.nix>
