---
module: services.portunus.ldap
option_count: 6
source: options.html
---

# services.portunus.ldap

## services.portunus.ldap.package

The openldap package to use. Type: package Default: pkgs.openldap Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.ldap.group

Group account under which Portunus runs its LDAP server. Type: string Default: "openldap" Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.ldap.searchUserName

The login name of the search user. This user account must be configured in Portunus either manually or via seeding. Type: string Default: "" Example: "admin" Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.ldap.suffix

The DN of the topmost entry in your LDAP directory. Please refer to the Portunus documentation for more information on how this impacts the structure of the LDAP directory. Type: string Example: "dc=example,dc=org" Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.ldap.tls

Whether to enable LDAPS protocol. This also adds two entries to the /etc/hosts file to point services.portunus.domain to localhost, so that CLIs and programs can use ldaps protocol and verify the certificate without opening the firewall port for the protocol. This requires a TLS certificate for services.portunus.domain to be configured via security.acme.certs. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>

## services.portunus.ldap.user

User account under which Portunus runs its LDAP server. Type: string Default: "openldap" Declared by: <nixpkgs/nixos/modules/services/misc/portunus.nix>
