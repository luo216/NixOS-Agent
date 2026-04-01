---
module: services.esphome
option_count: 8
source: options.html
---

# services.esphome

## services.esphome.enable

Whether to enable esphome, for making custom firmwares for ESP32/ESP8266. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/esphome.nix>

## services.esphome.enableUnixSocket

Listen on a unix socket /run/esphome/esphome.sock instead of the TCP port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/home-automation/esphome.nix>

## services.esphome.package

The esphome package to use. Type: package Default: pkgs.esphome Declared by: <nixpkgs/nixos/modules/services/home-automation/esphome.nix>

## services.esphome.address

esphome address Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/home-automation/esphome.nix>

## services.esphome.allowedDevices

A list of device nodes to which esphome has access to. Refer to DeviceAllow in systemd.resource-control(5) for more information. Beware that if a device is referred to by an absolute path instead of a device category, it will only allow devices that already are plugged in when the service is started. Type: list of string Default: [ "char-ttyS" "char-ttyUSB" ] Example: [ "/dev/serial/by-id/usb-Silicon_Labs_CP2102_USB_to_UART_Bridge_Controller_0001-if00-port0" ] Declared by: <nixpkgs/nixos/modules/services/home-automation/esphome.nix>

## services.esphome.openFirewall

Whether to open the firewall for the specified port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/home-automation/esphome.nix>

## services.esphome.port

esphome port Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6052 Declared by: <nixpkgs/nixos/modules/services/home-automation/esphome.nix>

## services.esphome.usePing

Use ping to check online status of devices instead of mDNS Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/home-automation/esphome.nix>
