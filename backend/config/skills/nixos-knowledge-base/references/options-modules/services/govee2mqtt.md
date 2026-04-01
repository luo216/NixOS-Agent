---
module: services.govee2mqtt
option_count: 5
source: options.html
---

# services.govee2mqtt

## services.govee2mqtt.enable

Whether to enable Govee2MQTT. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/govee2mqtt.nix>

## services.govee2mqtt.package

The govee2mqtt package to use. Type: package Default: pkgs.govee2mqtt Declared by: <nixpkgs/nixos/modules/services/home-automation/govee2mqtt.nix>

## services.govee2mqtt.environmentFile

Environment file as defined in systemd.exec(5). See upstream documentation https://github.com/wez/govee2mqtt/blob/main/docs/CONFIG.md. Type: absolute path Example: "/var/lib/govee2mqtt/govee2mqtt.env" Declared by: <nixpkgs/nixos/modules/services/home-automation/govee2mqtt.nix>

## services.govee2mqtt.group

Group under which Govee2MQTT should run. Type: string Default: "govee2mqtt" Declared by: <nixpkgs/nixos/modules/services/home-automation/govee2mqtt.nix>

## services.govee2mqtt.user

User under which Govee2MQTT should run. Type: string Default: "govee2mqtt" Declared by: <nixpkgs/nixos/modules/services/home-automation/govee2mqtt.nix>
