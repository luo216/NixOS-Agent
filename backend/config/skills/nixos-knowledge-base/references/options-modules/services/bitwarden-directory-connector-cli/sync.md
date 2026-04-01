---
module: services.bitwarden-directory-connector-cli.sync
option_count: 18
source: options.html
---

# services.bitwarden-directory-connector-cli.sync

## services.bitwarden-directory-connector-cli.sync.creationDateAttribute

Attribute that lists a user’s creation date. Type: string Example: "whenCreated" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.emailPrefixAttribute

The attribute that contains the users username. Type: string Example: "accountName" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.emailSuffix

Suffix for the email, normally @example.com. Type: string Example: "@example.com" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.groupFilter

LDAP filter for groups. Type: string Default: "" Example: "(cn=sales)" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.groupNameAttribute

Attribute for a name of group. Type: string Default: "cn" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.groupObjectClass

A class that groups will have. Type: string Default: "groupOfNames" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.groupPath

Group directory, relative to root. Type: string Default: "ou=groups" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.groups

Whether to sync ldap groups into BitWarden. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.largeImport

Enable if you are syncing more than 2000 users/groups. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.memberAttribute

Attribute that lists members in a LDAP group. Type: string Example: "uniqueMember" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.overwriteExisting

Remove and re-add users/groups, See https://bitwarden.com/help/user-group-filters/#overwriting-syncs for more details. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.removeDisabled

Remove users from bitwarden groups if no longer in the ldap group. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.useEmailPrefixSuffix

If a user has no email address, combine a username prefix with a suffix value to form an email. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.userEmailAttribute

Attribute for a users email. Type: string Default: "mail" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.userFilter

LDAP filter for users. Type: string Default: "" Example: "(memberOf=cn=sales,ou=groups,dc=example,dc=com)" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.userObjectClass

Class that users must have. Type: string Default: "inetOrgPerson" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.userPath

User directory, relative to root. Type: string Default: "ou=users" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync.users

Sync users. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>
