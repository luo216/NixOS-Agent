---
module: services.dokuwiki.sites.<name>.acl.*
option_count: 3
source: options.html
---

# services.dokuwiki.sites.<name>.acl.*

## services.dokuwiki.sites.<name>.acl.*.actor

User or group to restrict Type: string Example: "@external" Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.acl.*.level

Permission level to restrict the actor(s) to. See https://www.dokuwiki.org/acl#background_info for explanation Type: one of 4, 16, 2, 0, 1, 8, “create”, “delete”, “edit”, “none”, “read”, “upload” Example: "read" Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.sites.<name>.acl.*.page

Page or namespace to restrict Type: string Example: "start" Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>
