---
module: services.homebridge.uiSettings
option_count: 4
source: options.html
---

# services.homebridge.uiSettings

## services.homebridge.uiSettings.name

Name of the homebridge UI platform Type: string (read only) Default: "Config" Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>

## services.homebridge.uiSettings.platform

Type of the homebridge UI platform Type: string (read only) Default: "config" Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>

## services.homebridge.uiSettings.port

The port the UI web service should listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8581 Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>

## services.homebridge.uiSettings.restart

Command to restart the homebridge UI service Type: string (read only) Default: "sudo -n systemctl restart homebridge" Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>
