---
module: services.mailman.ldap.groupSearch
option_count: 3
source: options.html
---

# services.mailman.ldap.groupSearch

## services.mailman.ldap.groupSearch.ou

Organizational unit to look up a group. Type: string Example: "ou=groups,dc=nixos,dc=org" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.ldap.groupSearch.query

Query to find a group associated to a user in the LDAP database. Type: string Example: "(objectClass=groupOfNames)" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>

## services.mailman.ldap.groupSearch.type

Type of group to perform a group search against. Type: one of “posixGroup”, “groupOfNames”, “memberDNGroup”, “nestedMemberDNGroup”, “nestedGroupOfNames”, “groupOfUniqueNames”, “nestedGroupOfUniqueNames”, “activeDirectoryGroup”, “nestedActiveDirectoryGroup”, “organizationalRoleGroup”, “nestedOrganizationalRoleGroup” Default: "posixGroup" Declared by: <nixpkgs/nixos/modules/services/mail/mailman.nix>
