---
module: services.lldap.settings
option_count: 13
source: options.html
---

# services.lldap.settings

## services.lldap.settings.database_url

Database URL. Type: string Default: "sqlite://./users.db?mode=rwc" Example: "postgres://postgres-user:password@postgres-server/my-database" Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.force_ldap_user_pass_reset

Force reset of the admin password. Set this setting to "always" to update the admin password when ldap_user_pass_file changes. Setting to "always" also means any password update in the UI will be overwritten next time the service restarts. The difference between true and "always" is the former is intended for a one time fix while the latter is intended for a declarative workflow. In practice, the result is the same: the password gets reset. The only practical difference is the former outputs a warning message while the latter outputs an info message. Type: boolean or value “always” (singular enum) Default: false Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.http_host

The host address that the HTTP server will be bound to. Type: string Default: "::" Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.http_port

The port on which to have the HTTP server, for user login and administration. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 17170 Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.http_url

The public URL of the server, for password reset links. Type: string Default: "http://localhost" Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.jwt_secret_file

Path to a file containing the JWT secret. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.ldap_base_dn

Base DN for LDAP. Type: string Example: "dc=example,dc=com" Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.ldap_host

The host address that the LDAP server will be bound to. Type: string Default: "::" Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.ldap_port

The port on which to have the LDAP server. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3890 Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.ldap_user_dn

Admin username Type: string Default: "admin" Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.ldap_user_email

Admin email. Type: string Default: "admin@example.com" Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.ldap_user_pass

Password for default admin password. Unsecure: Use ldap_user_pass_file settings instead. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>

## services.lldap.settings.ldap_user_pass_file

Path to a file containing the default admin password. If you want to update the default admin password through this setting, you must set force_ldap_user_pass_reset to true. Otherwise changing this setting will have no effect unless this is the very first time LLDAP is started and its database is still empty. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/databases/lldap.nix>
