---
module: services.kerberos_server.settings
option_count: 4
source: options.html
---

# services.kerberos_server.settings

## services.kerberos_server.settings.include

Files to include in the Kerberos configuration. Type: (list of absolute path) or absolute path convertible to it Default: [ ] Declared by: <nixpkgs/nixos/modules/services/system/kerberos/default.nix>

## services.kerberos_server.settings.includedir

Directories containing files to include in the Kerberos configuration. Type: (list of absolute path) or absolute path convertible to it Default: [ ] Declared by: <nixpkgs/nixos/modules/services/system/kerberos/default.nix>

## services.kerberos_server.settings.module

Modules to obtain Kerberos configuration from. Type: (list of absolute path) or absolute path convertible to it Default: [ ] Declared by: <nixpkgs/nixos/modules/services/system/kerberos/default.nix>

## services.kerberos_server.settings.realms

The realm(s) to serve keys for. Type: attribute set of (open submodule of attribute set of ((list of attribute set of ((list of (signed integer or string or boolean)) or signed integer or string or boolean)) or attribute set of ((list of (signed integer or string or boolean)) or signed integer or string or boolean) or (list of (signed integer or string or boolean)) or signed integer or string or boolean)) Declared by: <nixpkgs/nixos/modules/services/system/kerberos/default.nix>
