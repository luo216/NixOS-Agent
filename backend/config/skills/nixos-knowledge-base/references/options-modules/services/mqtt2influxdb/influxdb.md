---
module: services.mqtt2influxdb.influxdb
option_count: 7
source: options.html
---

# services.mqtt2influxdb.influxdb

## services.mqtt2influxdb.influxdb.database

Name of the InfluxDB database. Type: string Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.influxdb.host

Host where InfluxDB server is running. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.influxdb.password

Password for InfluxDB login. It is highly suggested to use here replacement through environmentFiles as otherwise the password is put world readable to the store. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.influxdb.port

InfluxDB server port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8086 Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.influxdb.ssl

Use SSL to connect to the InfluxDB server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.influxdb.username

Username for InfluxDB login. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.influxdb.verify_ssl

Verify SSL certificate when connecting to the InfluxDB server. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>
