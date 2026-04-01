---
module: services.statsd
option_count: 9
source: options.html
---

# services.statsd

## services.statsd.enable

Whether to enable statsd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/monitoring/statsd.nix>

## services.statsd.backends

List of backends statsd will use for data persistence Type: list of string Default: [ ] Example: [ "graphite" "console" "repeater" "statsd-librato-backend" "statsd-influxdb-backend" ] Declared by: <nixpkgs/nixos/modules/services/monitoring/statsd.nix>

## services.statsd.extraConfig

Extra configuration options for statsd Type: null or string Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/statsd.nix>

## services.statsd.graphiteHost

Hostname or IP of Graphite server Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/statsd.nix>

## services.statsd.graphitePort

Port of Graphite server (i.e. carbon-cache). Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/statsd.nix>

## services.statsd.listenAddress

Address that statsd listens on over UDP Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/statsd.nix>

## services.statsd.mgmt_address

Address to run management TCP interface on Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/monitoring/statsd.nix>

## services.statsd.mgmt_port

Port to run the management TCP interface on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8126 Declared by: <nixpkgs/nixos/modules/services/monitoring/statsd.nix>

## services.statsd.port

Port that stats listens for messages on over UDP Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8125 Declared by: <nixpkgs/nixos/modules/services/monitoring/statsd.nix>
