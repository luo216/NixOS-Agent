---
module: services.kanidm.serverSettings
option_count: 9
source: options.html
---

# services.kanidm.serverSettings

## services.kanidm.serverSettings.bindaddress

Address/port combination the webserver binds to. Type: string Default: "127.0.0.1:8443" Example: "[::1]:8443" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.serverSettings.db_path

Path to Kanidm database. Type: absolute path (read only) Default: "/var/lib/kanidm/kanidm.db" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.serverSettings.domain

The domain that Kanidm manages. Must be below or equal to the domain specified in serverSettings.origin. This can be left at null, only if your instance has the role ReadOnlyReplica. While it is possible to change the domain later on, it requires extra steps! Please consider the warnings and execute the steps described in the documentation. Type: null or string Default: null Example: "example.org" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.serverSettings.ldapbindaddress

Address and port the LDAP server is bound to. Setting this to null disables the LDAP interface. Type: null or string Default: null Example: "[::1]:636" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.serverSettings.log_level

Log level of the server. Type: one of “info”, “debug”, “trace” Default: "info" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.serverSettings.origin

The origin of your Kanidm instance. Must have https as protocol. Type: string matching the pattern ^https://.* Example: "https://idm.example.org" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.serverSettings.role

The role of this server. This affects the replication relationship and thereby available features. Type: one of “WriteReplica”, “WriteReplicaNoUI”, “ReadOnlyReplica” Default: "WriteReplica" Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.serverSettings.tls_chain

TLS chain in pem format. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>

## services.kanidm.serverSettings.tls_key

TLS key in pem format. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/security/kanidm.nix>
