---
module: services.bitwarden-directory-connector-cli.ldap
option_count: 8
source: options.html
---

# services.bitwarden-directory-connector-cli.ldap

## services.bitwarden-directory-connector-cli.ldap.ad

Whether the LDAP Server is an Active Directory. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.ldap.hostname

The host the LDAP is accessible on. Type: string Example: "ldap.example.com" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.ldap.pagedSearch

Whether the LDAP server paginates search results. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.ldap.port

Port LDAP is accessible on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 389 Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.ldap.rootPath

Root path for LDAP. Type: string Example: "dc=example,dc=com" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.ldap.ssl

Whether to use TLS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.ldap.startTls

Whether to use STARTTLS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.ldap.username

The user to authenticate as. Type: string Example: "cn=admin,dc=example,dc=com" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>
