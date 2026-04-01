---
module: services.mattermost.matterircd
option_count: 3
source: options.html
---

# services.mattermost.matterircd

## services.mattermost.matterircd.enable

Whether to enable Mattermost IRC bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.matterircd.package

The matterircd package to use. Type: package Default: pkgs.matterircd Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>

## services.mattermost.matterircd.parameters

Set commandline parameters to pass to matterircd. See https://github.com/42wim/matterircd#usage for more information. Type: list of string Default: [ ] Example: [ "-mmserver chat.example.com" "-bind [::]:6667" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/mattermost.nix>
