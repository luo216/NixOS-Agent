---
module: services.mqtt2influxdb
option_count: 4
source: options.html
---

# services.mqtt2influxdb

## services.mqtt2influxdb.enable

Whether to enable BigClown MQTT to InfluxDB bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.package

The mqtt2influxdb package to use. Type: package Default: pkgs.python3Packages.mqtt2influxdb Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.environmentFiles

File to load as environment file. Environment variables from this file will be interpolated into the config file using envsubst with this syntax: $ENVIRONMENT or ${VARIABLE}. This is useful to avoid putting secrets into the nix store. Type: list of absolute path Default: [ ] Example: [ "/run/keys/mqtt2influxdb.env" ] Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.points

Points to bridge from MQTT to InfluxDB. Type: list of (submodule) Default: [ { fields = { value = "$.payload"; }; measurement = "temperature"; tags = { channel = "$.topic[3]"; id = "$.topic[1]"; }; topic = "node/+/thermometer/+/temperature"; } { fields = { value = "$.payload"; }; measurement = "relative-humidity"; tags = { channel = "$.topic[3]"; id = "$.topic[1]"; }; topic = "node/+/hygrometer/+/relative-humidity"; } { fields = { value = "$.payload"; }; measurement = "illuminance"; tags = { id = "$.topic[1]"; }; topic = "node/+/lux-meter/0:0/illuminance"; } { fields = { value = "$.payload"; }; measurement = "pressure"; tags = { id = "$.topic[1]"; }; topic = "node/+/barometer/0:0/pressure"; } { fields = { value = "$.payload"; }; measurement = "co2"; tags = { id = "$.topic[1]"; }; topic = "node/+/co2-meter/-/concentration"; } { fields = { value = "$.payload"; }; measurement = "voltage"; tags = { id = "$.topic[1]"; }; topic = "node/+/battery/+/voltage"; } { fields = { value = "$.payload"; }; measurement = "button"; tags = { channel = "$.topic[3]"; id = "$.topic[1]"; }; topic = "node/+/push-button/+/event-count"; } { fields = { value = "$.payload"; }; measurement = "tvoc"; tags = { id = "$.topic[1]"; }; topic = "node/+/voc-lp-sensor/0:0/tvoc"; } ] Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>
