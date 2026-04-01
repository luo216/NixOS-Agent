---
module: services.collabora-online.aliasGroups.*
option_count: 2
source: options.html
---

# services.collabora-online.aliasGroups.*

## services.collabora-online.aliasGroups.*.aliases

A list of regex pattern of aliasname. Type: list of string Default: [ ] Example: [ "scheme://aliasname1:port" "scheme://aliasname2:port" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/collabora-online.nix>

## services.collabora-online.aliasGroups.*.host

Hostname to allow or deny. Type: string Example: "scheme://hostname:port" Declared by: <nixpkgs/nixos/modules/services/web-apps/collabora-online.nix>
