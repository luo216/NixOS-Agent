---
module: services.netbox
option_count: 13
source: options.html
---

# services.netbox

## services.netbox.enable

Enable Netbox. This module requires a reverse proxy that serves /static separately. See this example on how to configure this. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.enableLdap

Enable LDAP-Authentication for Netbox. This requires a configuration file being pass through ldapConfigPath. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.package

NetBox package to use. Type: package Default: if lib.versionAtLeast config.system.stateVersion "25.11" then pkgs.netbox_4_4 else pkgs.netbox_4_2; Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.dataDir

Storage path of netbox. Type: string Default: "/var/lib/netbox" Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.extraConfig

Additional lines of configuration appended to the configuration.py. See the documentation for more possible options. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.keycloakClientSecret

File that contains the keycloak client secret. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.ldapConfigPath

Path to the Configuration-File for LDAP-Authentication, will be loaded as ldap_config.py. See the documentation for possible options. Type: absolute path Default: "" Example: '' import ldap from django_auth_ldap.config import LDAPSearch, PosixGroupType AUTH_LDAP_SERVER_URI = "ldaps://ldap.example.com/" AUTH_LDAP_USER_SEARCH = LDAPSearch( "ou=accounts,ou=posix,dc=example,dc=com", ldap.SCOPE_SUBTREE, "(uid=%(user)s)", ) AUTH_LDAP_GROUP_SEARCH = LDAPSearch( "ou=groups,ou=posix,dc=example,dc=com", ldap.SCOPE_SUBTREE, "(objectClass=posixGroup)", ) AUTH_LDAP_GROUP_TYPE = PosixGroupType() # Mirror LDAP group assignments. AUTH_LDAP_MIRROR_GROUPS = True # For more granular permissions, we can map LDAP groups to Django groups. AUTH_LDAP_FIND_GROUP_PERMS = True '' Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.listenAddress

Address the server will listen on. Ignored if unixSocket is set. Type: string Default: "[::1]" Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.plugins

List of plugin packages to install. Type: function that evaluates to a(n) list of package Default: python3Packages: with python3Packages; []; Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.port

Port the server will listen on. Ignored if unixSocket is set. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8001 Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.secretKeyFile

Path to a file containing the secret key. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.settings

Configuration options to set in configuration.py. See the documentation for more possible options. Type: open submodule of attribute set of (Python value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>

## services.netbox.unixSocket

Enable Unix Socket for the server to listen on. listenAddress and port will be ignored. Type: null or string Default: null Example: "/run/netbox/netbox.sock" Declared by: <nixpkgs/nixos/modules/services/web-apps/netbox.nix>
