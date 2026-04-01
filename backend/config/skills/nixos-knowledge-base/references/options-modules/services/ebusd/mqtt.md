---
module: services.ebusd.mqtt
option_count: 7
source: options.html
---

# services.ebusd.mqtt

## services.ebusd.mqtt.enable

Whether to enable support for MQTT. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.mqtt.home-assistant

Adds the Home Assistant topics to MQTT, read more at MQTT Integration Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.mqtt.host

Connect to MQTT broker on HOST. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.mqtt.password

The MQTT password. Type: string Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.mqtt.port

The port on which to connect to MQTT Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1883 Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.mqtt.retain

Whether to enable set the retain flag on all topics instead of only selected global ones. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>

## services.ebusd.mqtt.user

The MQTT user to use Type: string Declared by: <nixpkgs/nixos/modules/services/home-automation/ebusd.nix>
