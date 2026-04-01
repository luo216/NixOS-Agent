---
module: services.mailman.ldap.userSearch
option_count: 2
source: options.html
---

# services.mailman.ldap.userSearch

## services.mailman.ldap.userSearch.ou

Organizational unit to look up a user. Type: string Example: "ou=users,dc=nixos,dc=org" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.ldap.userSearch.query

Query to find a user in the LDAP database. Type: string Example: "(&(objectClass=inetOrgPerson)(|(uid=%(user)s)(mail=%(user)s)))" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>
