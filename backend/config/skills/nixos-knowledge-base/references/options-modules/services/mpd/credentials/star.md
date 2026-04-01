---
module: services.mpd.credentials.*
option_count: 2
source: options.html
---

# services.mpd.credentials.*

## services.mpd.credentials.*.passwordFile

Path to file containing the password. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>

## services.mpd.credentials.*.permissions

List of permissions that are granted with this password. Permissions can be “read”, “add”, “control”, “admin”. Type: list of (one of “read”, “add”, “control”, “admin”) Default: [ "read" ] Declared by: <nixpkgs/nixos/modules/services/audio/mpd.nix>
