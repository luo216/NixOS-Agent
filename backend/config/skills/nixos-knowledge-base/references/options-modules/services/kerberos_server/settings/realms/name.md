---
module: services.kerberos_server.settings.realms.<name>
option_count: 1
source: options.html
---

# services.kerberos_server.settings.realms.<name>

## services.kerberos_server.settings.realms.<name>.acl

The privileges granted to a user. Type: list of (submodule) Default: [ { access = "all"; principal = "*/admin"; } { access = "all"; principal = "admin"; } ] Declared by: <nixpkgs/nixos/modules/services/system/kerberos/default.nix>
