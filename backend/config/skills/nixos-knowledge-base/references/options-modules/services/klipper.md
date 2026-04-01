---
module: services.klipper
option_count: 14
source: options.html
---

# services.klipper

## services.klipper.enable

Whether to enable Klipper, the 3D printer firmware. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.package

The klipper package to use. Type: package Default: pkgs.klipper Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.apiSocket

Path of the API socket to create. Type: null or absolute path Default: "/run/klipper/api" Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.configDir

Path to Klipper config file. Type: absolute path Default: "/var/lib/klipper" Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.configFile

Path to default Klipper config. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.extraSettings

Extra lines to append to the generated Klipper configuration. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.firmwares

Firmwares Klipper should manage Type: attribute set of (submodule) Default: { } Example: { mcu = { configFile = { _type = "literalExpression"; text = "./klipper-firmware.cfg"; }; enable = true; enableKlipperFlash = true; serial = "/dev/serial/by-id/usb-Klipper_123ABCDEF"; }; } Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.group

Group account under which Klipper runs. If null is specified (default), a temporary user will be created by systemd. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.inputTTY

Path of the virtual printer symlink to create. Type: absolute path Default: "/run/klipper/tty" Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.logFile

Path of the file Klipper should log to. If null, it logs to stdout, which is not recommended by upstream. Type: null or absolute path Default: null Example: "/var/lib/klipper/klipper.log" Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.mutableConfig

Whether to manage the config outside of NixOS. It will still be initialized with the defined NixOS config if the file doesn’t already exist. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.octoprintIntegration

Allows Octoprint to control Klipper. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.settings

Configuration for Klipper. See the documentation for supported values. Type: null or (attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string) or a non-empty list of them)) Default: null Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>

## services.klipper.user

User account under which Klipper runs. If null is specified (default), a temporary user will be created by systemd. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/klipper.nix>
