---
module: services.uhub.<name>.plugins.*
option_count: 2
source: options.html
---

# services.uhub.<name>.plugins.*

## services.uhub.<name>.plugins.*.plugin

Path to plugin file. Type: absolute path Example: $${pkgs.uhub}/plugins/mod_auth_sqlite.so Declared by: <nixpkgs/nixos/modules/services/misc/uhub.nix>

## services.uhub.<name>.plugins.*.settings

Settings specific to this plugin. Type: attribute set of string Example: { file = "/etc/uhub/users.db"; } Declared by: <nixpkgs/nixos/modules/services/misc/uhub.nix>
