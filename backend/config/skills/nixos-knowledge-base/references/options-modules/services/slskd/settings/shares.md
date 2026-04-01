---
module: services.slskd.settings.shares
option_count: 2
source: options.html
---

# services.slskd.settings.shares

## services.slskd.settings.shares.directories

Paths to shared directories. See documentation for advanced usage. Type: list of string Example: [ "/home/John/Music" "!/home/John/Music/Recordings" "[Music Drive]/mnt" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>

## services.slskd.settings.shares.filters

Regular expressions of files to exclude from sharing. Type: list of string Example: [ "\.ini$" "Thumbs.db$" "\.DS_Store$" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/slskd.nix>
