---
module: services.hologram-server
option_count: 15
source: options.html
---

# services.hologram-server

## services.hologram-server.enable

Whether to enable the Hologram server for AWS instance credentials Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.enableLdapRoles

Whether to assign user roles based on the user’s LDAP group memberships Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.awsAccount

AWS account number Type: string Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.awsDefaultRole

AWS default role Type: string Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.cacheTimeoutSeconds

How often (in seconds) to refresh the LDAP cache Type: signed integer Default: 3600 Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.groupClassAttr

The objectclass attribute to search for groups when enableLdapRoles is true Type: string Default: "groupOfNames" Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.ldapBaseDN

The base DN for your Hologram users Type: string Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.ldapBindDN

DN of account to use to query the LDAP server Type: string Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.ldapBindPassword

Password of account to use to query the LDAP server Type: string Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.ldapHost

Address of the LDAP server to use Type: string Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.ldapInsecure

Whether to connect to LDAP over SSL or not Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.ldapUserAttr

The LDAP attribute for usernames Type: string Default: "cn" Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.listenAddress

Address and port to listen on Type: string Default: "0.0.0.0:3100" Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.roleAttr

Which LDAP group attribute to search for authorized role ARNs Type: string Default: "businessCategory" Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>

## services.hologram-server.statsAddress

Address of statsd server Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/security/hologram-server.nix>
