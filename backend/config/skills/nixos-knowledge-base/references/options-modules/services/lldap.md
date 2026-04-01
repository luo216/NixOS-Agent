---
module: services.lldap
option_count: 6
source: options.html
---

# services.lldap

## services.lldap.enable

Whether to enable lldap, a lightweight authentication server that provides an opinionated, simplified LDAP interface for authentication. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.package

The lldap package to use. Type: package Default: pkgs.lldap Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.environment

Environment variables passed to the service. Any config option name prefixed with LLDAP_ takes priority over the one in the configuration file. Type: attribute set of string Default: { } Example: { LLDAP_JWT_SECRET_FILE = "/run/lldap/jwt_secret"; LLDAP_LDAP_USER_PASS_FILE = "/run/lldap/user_password"; } Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.environmentFile

Environment file as defined in systemd.exec(5) passed to the service. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings

Free-form settings written directly to the lldap_config.toml file. Refer to https://github.com/lldap/lldap/blob/main/lldap_config.docker_template.toml for supported values. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.silenceForceUserPassResetWarning

Disable warning when the admin password is set declaratively with the ldap_user_pass_file setting but the force_ldap_user_pass_reset is set to false. This can lead to the admin password to drift from the one given declaratively. If that is okay for you and you want to silence the warning, set this option to true. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>
