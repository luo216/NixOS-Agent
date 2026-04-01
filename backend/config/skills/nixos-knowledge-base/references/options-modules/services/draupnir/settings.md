---
module: services.draupnir.settings
option_count: 4
source: options.html
---

# services.draupnir.settings

## services.draupnir.settings.dataPath

The path Draupnir will store its state/data in. Warning This option is read-only. Note If you want to customize where this data is stored, use a bind mount. Type: absolute path (read only) Default: "/var/lib/draupnir" Declared by: <nixpkgs/nixos/modules/services/matrix/draupnir.nix>

## services.draupnir.settings.homeserverUrl

Base URL of the Matrix homeserver that provides the Client-Server API. Note When using Pantalaimon, set this to the Pantalaimon URL and services.draupnir.settings.rawHomeserverUrl to the public URL. Type: string Example: "https://matrix.org" Declared by: <nixpkgs/nixos/modules/services/matrix/draupnir.nix>

## services.draupnir.settings.managementRoom

The room ID or alias where moderators can use the bot’s functionality. The bot has no access controls, so anyone in this room can use the bot - secure this room! Do not enable end-to-end encryption for this room, unless set up with Pantalaimon. Warning When using a room alias, make sure the alias used is on the local homeserver! This prevents an issue where the control room becomes undefined when the alias can’t be resolved. Type: string Example: "#moderators:example.org" Declared by: <nixpkgs/nixos/modules/services/matrix/draupnir.nix>

## services.draupnir.settings.rawHomeserverUrl

Public base URL of the Matrix homeserver that provides the Client-Server API when using the Draupnir’s Report forwarding feature. Warning When using Pantalaimon, do not set this to the Pantalaimon URL! Type: string Default: config.services.draupnir.settings.homeserverUrl Example: "https://matrix.org" Declared by: <nixpkgs/nixos/modules/services/matrix/draupnir.nix>
