---
module: services.usbrelayd
option_count: 3
source: options.html
---

# services.usbrelayd

## services.usbrelayd.enable

Whether to enable USB Relay MQTT daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/usbrelayd.nix>

## services.usbrelayd.broker

Hostname or IP address of your MQTT Broker. Type: string Default: "127.0.0.1" Example: [ "mqtt" "192.168.1.1" ] Declared by: <nixpkgs/nixos/modules/services/hardware/usbrelayd.nix>

## services.usbrelayd.clientName

Name, your client connects as. Type: string Default: "MyUSBRelay" Declared by: <nixpkgs/nixos/modules/services/hardware/usbrelayd.nix>
