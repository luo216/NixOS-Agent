---
module: services.openldap
option_count: 9
source: options.html
---

# services.openldap

## services.openldap.enable

Whether to enable the ldap server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>

## services.openldap.package

The openldap package to use. This can be used to, for example, set an OpenLDAP package with custom overrides to enable modules or other functionality. Type: package Default: pkgs.openldap Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>

## services.openldap.configDir

Use this config directory instead of generating one from the settings option. Overrides all NixOS settings. Type: null or absolute path Default: null Example: "/var/lib/openldap/slapd.d" Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>

## services.openldap.declarativeContents

Declarative contents for the LDAP database, in LDIF format by suffix. All data will be erased when starting the LDAP server. Modifications to the database are not prevented, they are just dropped on the next reboot of the server. Performance-wise the database and indexes are rebuilt on each server startup, so this will slow down server startup, especially with large databases. Note that the root of the DB must be defined in services.openldap.settings and the olcDbDirectory must begin with "/var/lib/openldap". Type: attribute set of strings concatenated with “\n” Default: { } Example: { "dc=example,dc=org" = '' dn= dn: dc=example,dc=org objectClass: domain dc: example dn: ou=users,dc=example,dc=org objectClass = organizationalUnit ou: users # ... ''; } Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>

## services.openldap.group

Group account under which slapd runs. Type: string Default: "openldap" Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>

## services.openldap.mutableConfig

Whether to allow writable on-line configuration. If true, the NixOS settings will only be used to initialize the OpenLDAP configuration if it does not exist, and are subsequently ignored. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>

## services.openldap.settings

Configuration for OpenLDAP, in OLC format Type: submodule Example: { attrs.olcLogLevel = [ "stats" ]; children = { "cn=schema".includes = [ "${pkgs.openldap}/etc/schema/core.ldif" "${pkgs.openldap}/etc/schema/cosine.ldif" "${pkgs.openldap}/etc/schema/inetorgperson.ldif" ]; "olcDatabase={-1}frontend" = { attrs = { objectClass = "olcDatabaseConfig"; olcDatabase = "{-1}frontend"; olcAccess = [ "{0}to * by dn.exact=uidNumber=0+gidNumber=0,cn=peercred,cn=external,cn=auth manage stop by * none stop" ]; }; }; "olcDatabase={0}config" = { attrs = { objectClass = "olcDatabaseConfig"; olcDatabase = "{0}config"; olcAccess = [ "{0}to * by * none break" ]; }; }; "olcDatabase={1}mdb" = { attrs = { objectClass = [ "olcDatabaseConfig" "olcMdbConfig" ]; olcDatabase = "{1}mdb"; olcDbDirectory = "/var/lib/openldap/ldap"; olcDbIndex = [ "objectClass eq" "cn pres,eq" "uid pres,eq" "sn pres,eq,subany" ]; olcSuffix = "dc=example,dc=com"; olcAccess = [ "{0}to * by * read break" ]; }; }; }; }; Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>

## services.openldap.urlList

URL list slapd should listen on. Type: list of string Default: [ "ldap:///" ] Example: [ "ldaps:///" ] Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>

## services.openldap.user

User account under which slapd runs. Type: string Default: "openldap" Declared by: <nixpkgs/nixos/modules/services/databases/openldap.nix>
