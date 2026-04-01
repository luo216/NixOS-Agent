---
module: services.mqtt2influxdb.mqtt
option_count: 7
source: options.html
---

# services.mqtt2influxdb.mqtt

## services.mqtt2influxdb.mqtt.cafile

Certification Authority file for MQTT Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.mqtt.certfile

Certificate file for MQTT Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.mqtt.host

Host where MQTT server is running. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.mqtt.keyfile

Key file for MQTT Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.mqtt.password

MQTT password. It is highly suggested to use here replacement through environmentFiles as otherwise the password is put world readable to the store. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.mqtt.port

MQTT server port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1883 Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>

## services.mqtt2influxdb.mqtt.username

Username used to connect to the MQTT server. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/mqtt2influxdb.nix>
