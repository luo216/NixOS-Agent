---
module: users.ldap.daemon
option_count: 4
source: options.html
---

# users.ldap.daemon

## users.ldap.daemon.enable

Whether to let the nslcd daemon (nss-pam-ldapd) handle the LDAP lookups for NSS and PAM. This can improve performance, and if you need to bind to the LDAP server with a password, it increases security, since only the nslcd user needs to have access to the bindpw file, not everyone that uses NSS and/or PAM. If this option is enabled, a local nscd user is created automatically, and the nslcd service is started automatically when the network get up. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.daemon.extraConfig

Extra configuration options that will be added verbatim at the end of the nslcd configuration file (nslcd.conf(5)). Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.daemon.rootpwmoddn

The distinguished name to use to bind to the LDAP server when the root user tries to modify a user’s password. Type: string Default: "" Example: "cn=admin,dc=example,dc=com" Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.daemon.rootpwmodpwFile

The path to a file containing the credentials with which to bind to the LDAP server if the root user tries to change a user’s password. Type: string Default: "" Example: "/run/keys/nslcd.rootpwmodpw" Declared by: <nixpkgs/nixos/modules/config/ldap.nix>
