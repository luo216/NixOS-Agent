---
module: services.zigbee2mqtt
option_count: 4
source: options.html
---

# services.zigbee2mqtt

## services.zigbee2mqtt.enable

Whether to enable zigbee2mqtt service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/zigbee2mqtt.nix>

## services.zigbee2mqtt.package

The zigbee2mqtt package to use. Type: package Default: pkgs.zigbee2mqtt Declared by: <nixpkgs/nixos/modules/services/home-automation/zigbee2mqtt.nix>

## services.zigbee2mqtt.dataDir

Zigbee2mqtt data directory Type: absolute path Default: "/var/lib/zigbee2mqtt" Declared by: <nixpkgs/nixos/modules/services/home-automation/zigbee2mqtt.nix>

## services.zigbee2mqtt.settings

Your configuration.yaml as a Nix attribute set. Check the documentation for possible options. Type: YAML 1.1 value Default: { } Example: { homeassistant.enabled = config.services.home-assistant.enable; permit_join = true; serial = { port = "/dev/ttyACM1"; }; } Declared by: <nixpkgs/nixos/modules/services/home-automation/zigbee2mqtt.nix>
