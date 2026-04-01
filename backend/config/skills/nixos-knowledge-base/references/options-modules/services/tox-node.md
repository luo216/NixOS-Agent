---
module: services.tox-node
option_count: 9
source: options.html
---

# services.tox-node

## services.tox-node.enable

Whether to enable Tox Node service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/tox-node.nix>

## services.tox-node.keysFile

Path to the file where DHT keys are stored. Type: string Default: "/var/lib/tox-node/keys" Declared by: <nixpkgs/nixos/modules/services/networking/tox-node.nix>

## services.tox-node.lanDiscovery

Enable local network discovery. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/tox-node.nix>

## services.tox-node.logType

Logging implementation. Type: one of “Stderr”, “Stdout”, “Syslog”, “None” Default: "Stderr" Declared by: <nixpkgs/nixos/modules/services/networking/tox-node.nix>

## services.tox-node.motd

Message of the day Type: string Default: "Hi from tox-rs! I'm up {{uptime}}. TCP: incoming {{tcp_packets_in}}, outgoing {{tcp_packets_out}}, UDP: incoming {{udp_packets_in}}, outgoing {{udp_packets_out}}" Declared by: <nixpkgs/nixos/modules/services/networking/tox-node.nix>

## services.tox-node.tcpAddresses

TCP addresses to run TCP relay. Type: list of string Default: [ "0.0.0.0:33445" ] Declared by: <nixpkgs/nixos/modules/services/networking/tox-node.nix>

## services.tox-node.tcpConnectionLimit

Maximum number of active TCP connections relay can hold Type: signed integer Default: 8192 Declared by: <nixpkgs/nixos/modules/services/networking/tox-node.nix>

## services.tox-node.threads

Number of threads for execution Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/networking/tox-node.nix>

## services.tox-node.udpAddress

UDP address to run DHT node. Type: string Default: "0.0.0.0:33445" Declared by: <nixpkgs/nixos/modules/services/networking/tox-node.nix>
