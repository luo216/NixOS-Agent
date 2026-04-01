---
module: services.syncthing.settings
option_count: 3
source: options.html
---

# services.syncthing.settings

## services.syncthing.settings.devices

Peers/devices which Syncthing should communicate with. Note that you can still add devices manually, but those changes will be reverted on restart if overrideDevices is enabled. Type: attribute set of (open submodule of (JSON value)) Default: { } Example: { bigbox = { addresses = [ "tcp://192.168.0.10:51820" ]; id = "7CFNTQM-IMTJBHJ-3UWRDIU-ZGQJFR6-VCXZ3NB-XUH3KZO-N52ITXR-LAIYUAU"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.folders

Folders which should be shared by Syncthing. Note that you can still add folders manually, but those changes will be reverted on restart if overrideFolders is enabled. Type: attribute set of (open submodule of (JSON value)) Default: { } Example: { "/home/user/sync" = { id = "syncme"; devices = [ "bigbox" ]; }; } Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.options

The options element contains all other global configuration options Type: open submodule of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>
