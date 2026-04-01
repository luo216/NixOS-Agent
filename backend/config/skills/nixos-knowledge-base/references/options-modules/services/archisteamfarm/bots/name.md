---
module: services.archisteamfarm.bots.<name>
option_count: 4
source: options.html
---

# services.archisteamfarm.bots.<name>

## services.archisteamfarm.bots.<name>.enabled

Whether to enable the bot on startup. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>

## services.archisteamfarm.bots.<name>.passwordFile

Path to a file containing the password. The file must be readable by the archisteamfarm user/group. Omit or set to null to provide the password a different way, such as through the web-ui. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>

## services.archisteamfarm.bots.<name>.settings

Additional settings that are documented here. Type: attribute set Default: { } Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>

## services.archisteamfarm.bots.<name>.username

Name of the user to log in. Default is attribute name. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/games/archisteamfarm.nix>
