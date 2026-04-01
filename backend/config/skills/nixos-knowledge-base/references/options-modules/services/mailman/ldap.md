---
module: services.mailman.ldap
option_count: 5
source: options.html
---

# services.mailman.ldap

## services.mailman.ldap.enable

Whether to enable LDAP auth. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.ldap.bindDn

Service account to bind against. Type: string Example: "cn=root,dc=nixos,dc=org" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.ldap.bindPasswordFile

Path to the file containing the bind password of the service account defined by services.mailman.ldap.bindDn. Type: string Example: "/run/secrets/ldap-bind" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.ldap.serverUri

LDAP host to connect against. Type: string Example: "ldaps://ldap.host" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.ldap.superUserGroup

Group where a user must be a member of to gain superuser rights. Type: null or string Default: null Example: "cn=admin,ou=groups,dc=nixos,dc=org" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>
