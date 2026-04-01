---
module: services.bitwarden-directory-connector-cli
option_count: 7
source: options.html
---

# services.bitwarden-directory-connector-cli

## services.bitwarden-directory-connector-cli.enable

Whether to enable Bitwarden Directory Connector. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.package

The bitwarden-directory-connector-cli package to use. Type: package Default: pkgs.bitwarden-directory-connector-cli Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.domain

The domain the Bitwarden/Vaultwarden is accessible on. Type: string Example: "https://vaultwarden.example.com" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.interval

The interval when to run the connector. This uses systemd’s OnCalendar syntax. Type: string Default: "*:0,15,30,45" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.ldap

Options to configure the LDAP connection. If you used the desktop application to test the configuration you can find the settings by searching for ldap in ~/.config/Bitwarden\ Directory\ Connector/data.json. Type: open submodule of attribute set of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.sync

Options to configure what gets synced. If you used the desktop application to test the configuration you can find the settings by searching for sync in ~/.config/Bitwarden\ Directory\ Connector/data.json. Type: open submodule of attribute set of (JSON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>

## services.bitwarden-directory-connector-cli.user

User to run the program. Type: string Default: "bwdc" Declared by: <nixpkgs/nixos/modules/services/security/bitwarden-directory-connector-cli.nix>
