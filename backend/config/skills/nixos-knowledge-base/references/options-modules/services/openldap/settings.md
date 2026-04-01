---
module: services.openldap.settings
option_count: 3
source: options.html
---

# services.openldap.settings

## services.openldap.settings.attrs

Attributes of the parent entry. Type: attribute set of ((LDAP value - either a string, or an attrset containing `path` or `base64` for included values or base-64 encoded values respectively. ) or list of (LDAP value - either a string, or an attrset containing `path` or `base64` for included values or base-64 encoded values respectively. )) Default: { } Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>

## services.openldap.settings.children

Child entries of the current entry, with recursively the same structure. Type: attribute set of (submodule) Default: { } Example: { "cn=schema" = { # The attribute used in the DN must be defined attrs = { cn = "schema"; }; children = { # This entry's DN is expanded to "cn=foo,cn=schema" "cn=foo" = { ... }; }; # These includes are inserted after "cn=schema", but before "cn=foo,cn=schema" includes = [ ... ]; }; } Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>

## services.openldap.settings.includes

LDIF files to include after the parent’s attributes but before its children. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>
