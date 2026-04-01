---
module: services.fastnetmon-advanced
option_count: 5
source: options.html
---

# services.fastnetmon-advanced

## services.fastnetmon-advanced.enable

Whether to enable the fastnetmon-advanced DDoS Protection daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/fastnetmon-advanced.nix>

## services.fastnetmon-advanced.enableAdvancedTrafficPersistence

Store historical flow data in clickhouse Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/fastnetmon-advanced.nix>

## services.fastnetmon-advanced.bgpPeers

BGP Peers to declaratively load into FastNetMon Advanced Type: attribute set of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/fastnetmon-advanced.nix>

## services.fastnetmon-advanced.hostgroups

Hostgroups to declaratively load into FastNetMon Advanced Type: attribute set of (YAML 1.1 value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/fastnetmon-advanced.nix>

## services.fastnetmon-advanced.settings

Extra configuration options to declaratively load into FastNetMon Advanced. See the FastNetMon Advanced Configuration options reference for more details. Type: YAML 1.1 value Default: { } Example: { networks_list = [ "192.0.2.0/24" ]; gobgp = true; gobgp_flow_spec_announces = true; } Declared by: <nixpkgs/nixos/modules/services/networking/fastnetmon-advanced.nix>
