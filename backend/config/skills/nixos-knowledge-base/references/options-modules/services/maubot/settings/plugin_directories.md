---
module: services.maubot.settings.plugin_directories
option_count: 3
source: options.html
---

# services.maubot.settings.plugin_directories

## services.maubot.settings.plugin_directories.load

The directories from which plugins should be loaded. Duplicate plugin IDs will be moved to the trash. Type: list of string Default: [ "${config.services.maubot.dataDir}/plugins" ] Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.plugin_directories.trash

The directory where old plugin versions and conflicting plugins should be moved. Set to null to delete files immediately. Type: null or string Default: "${config.services.maubot.dataDir}/trash" Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>

## services.maubot.settings.plugin_directories.upload

The directory where uploaded new plugins should be stored. Type: string Default: "${config.services.maubot.dataDir}/plugins" Declared by: <nixpkgs/nixos/modules/services/matrix/maubot.nix>
