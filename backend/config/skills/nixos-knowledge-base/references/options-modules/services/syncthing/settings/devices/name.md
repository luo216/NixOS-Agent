---
module: services.syncthing.settings.devices.<name>
option_count: 3
source: options.html
---

# services.syncthing.settings.devices.<name>

## services.syncthing.settings.devices.<name>.autoAcceptFolders

Automatically create or share folders that this device advertises at the default path. See https://docs.syncthing.net/users/config.html?highlight=autoaccept#config-file-format. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.devices.<name>.id

The device ID. See https://docs.syncthing.net/dev/device-ids.html. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>

## services.syncthing.settings.devices.<name>.name

The name of the device. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/syncthing.nix>
