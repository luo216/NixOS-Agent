---
module: users.ldap
option_count: 8
source: options.html
---

# users.ldap

## users.ldap.enable

Whether to enable authentication against an LDAP server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.base

The distinguished name of the search base. Type: string Example: "dc=example,dc=org" Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.extraConfig

Extra configuration options that will be added verbatim at the end of the ldap configuration file (ldap.conf(5)). If users.ldap.daemon is enabled, this configuration will not be used. In that case, use users.ldap.daemon.extraConfig instead. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.loginPam

Whether to include authentication against LDAP in login PAM. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.nsswitch

Whether to include lookup against LDAP in NSS. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.server

The URL of the LDAP server. Type: string Example: "ldap://ldap.example.org/" Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.timeLimit

Specifies the time limit (in seconds) to use when performing searches. A value of zero (0), which is the default, is to wait indefinitely for searches to be completed. Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/config/ldap.nix>

## users.ldap.useTLS

If enabled, use TLS (encryption) over an LDAP (port 389) connection. The alternative is to specify an LDAPS server (port 636) in users.ldap.server or to forego security. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/config/ldap.nix>
