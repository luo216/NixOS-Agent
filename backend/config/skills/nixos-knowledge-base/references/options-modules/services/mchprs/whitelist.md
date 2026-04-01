---
module: services.mchprs.whitelist
option_count: 2
source: options.html
---

# services.mchprs.whitelist

## services.mchprs.whitelist.enable

Whether or not the whitelist (in whitelist.json) shoud be enabled. Only has effect when services.mchprs.declarativeSettings is true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>

## services.mchprs.whitelist.list

Whitelisted players, only has an effect when services.mchprs.declarativeWhitelist is true and the whitelist is enabled via services.mchprs.whitelist.enable. This is a mapping from Minecraft usernames to UUIDs. You can use https://mcuuid.net/ to get a Minecraft UUID for a username. Type: attribute set of Minecraft UUID Default: { } Example: { username1 = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; username2 = "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy"; }; Declared by: <nixpkgs/nixos/modules/services/games/mchprs.nix>
