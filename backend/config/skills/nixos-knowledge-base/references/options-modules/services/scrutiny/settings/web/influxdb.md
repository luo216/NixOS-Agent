---
module: services.scrutiny.settings.web.influxdb
option_count: 6
source: options.html
---

# services.scrutiny.settings.web.influxdb

## services.scrutiny.settings.web.influxdb.bucket

InfluxDB bucket in which to store data. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.settings.web.influxdb.host

IP or hostname of the InfluxDB instance. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.settings.web.influxdb.org

InfluxDB organisation under which to store data. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.settings.web.influxdb.port

The port of the InfluxDB instance. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8086 Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.settings.web.influxdb.scheme

URL scheme to use when connecting to InfluxDB. Type: string Default: "http" Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>

## services.scrutiny.settings.web.influxdb.token

Authentication token for connecting to InfluxDB. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/scrutiny.nix>
