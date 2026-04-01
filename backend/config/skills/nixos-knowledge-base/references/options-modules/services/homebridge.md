---
module: services.homebridge
option_count: 9
source: options.html
---

# services.homebridge

## services.homebridge.enable

Whether to enable Homebridge: Homekit home automation. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>

## services.homebridge.environmentFile

Path to an environment-file which may contain secrets. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>

## services.homebridge.group

Group to run homebridge as. Type: string Default: "homebridge" Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>

## services.homebridge.openFirewall

Open ports in the firewall for the Homebridge web interface and service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>

## services.homebridge.pluginPath

Path to the plugin download directory (needs to be writeable). Seems this needs to end with node_modules, as Homebridge will run npm on the parent directory. Type: string Default: "/var/lib/homebridge/node_modules" Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>

## services.homebridge.settings

Configuration options for homebridge. For more details, see the homebridge documentation. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>

## services.homebridge.uiSettings

Configuration options for homebridge config UI plugin. For more details, see the homebridge-config-ui-x documentation. Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>

## services.homebridge.user

User to run homebridge as. Type: string Default: "homebridge" Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>

## services.homebridge.userStoragePath

Path to store homebridge user files (needs to be writeable). Type: string Default: "/var/lib/homebridge" Declared by: <nixpkgs/nixos/modules/services/home-automation/homebridge.nix>
