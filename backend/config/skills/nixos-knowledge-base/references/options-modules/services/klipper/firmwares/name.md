---
module: services.klipper.firmwares.<name>
option_count: 6
source: options.html
---

# services.klipper.firmwares.<name>

## services.klipper.firmwares.<name>.enable

Whether to enable building of firmware for manual flashing . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.firmwares.<name>.enableKlipperFlash

Whether to enable flashings scripts for firmware. This will add klipper-flash-$mcu scripts to your environment which can be called to flash the firmware. Please check the configs at klipper whether your board supports flashing via make flash . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.firmwares.<name>.package

Path to the built firmware package. Type: null or package (read only) Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.firmwares.<name>.configFile

Path to firmware config which is generated using klipper-genconf Type: absolute path Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.firmwares.<name>.klipperFlashPackage

Path to the built klipper-flash package. Type: null or package (read only) Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.firmwares.<name>.serial

Path to serial port this printer is connected to. Derived from service.klipper.settings by default. Type: null or absolute path Default: config.services.klipper.settings.<name>.serial Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>
