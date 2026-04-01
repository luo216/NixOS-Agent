---
module: services.kerberos_server.settings.realms.<name>.acl.*
option_count: 3
source: options.html
---

# services.kerberos_server.settings.realms.<name>.acl.*

## services.kerberos_server.settings.realms.<name>.acl.*.access

The changes the principal is allowed to make. Important The “all” permission does not imply the “get-keys” permission. This is consistent with the behavior of both MIT Kerberos and Heimdal. Warning Value “all” is allowed as a list member only if it appears alone or accompanied by “get-keys”. Any other combination involving “all” will raise an exception. Type: (list of (one of “all”, “add”, “cpw”, “delete”, “get-keys”, “get”, “list”, “modify”)) or string convertible to it Default: "all" Declared by: <nixpkgs/nixos/modules/services/system/kerberos/default.nix>

## services.kerberos_server.settings.realms.<name>.acl.*.principal

Which principal the rule applies to Type: string Declared by: <nixpkgs/nixos/modules/services/system/kerberos/default.nix>

## services.kerberos_server.settings.realms.<name>.acl.*.target

The principals that ‘access’ applies to. Type: string Default: "*" Declared by: <nixpkgs/nixos/modules/services/system/kerberos/default.nix>
