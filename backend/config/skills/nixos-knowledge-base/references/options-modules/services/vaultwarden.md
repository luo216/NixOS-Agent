---
module: services.vaultwarden
option_count: 10
source: options.html
---

# services.vaultwarden

## services.vaultwarden.enable

Whether to enable vaultwarden. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/vaultwarden/default.nix>

## services.vaultwarden.package

The vaultwarden package to use. Type: package Default: pkgs.vaultwarden Declared by: <nixpkgs/nixos/modules/services/security/vaultwarden/default.nix>

## services.vaultwarden.backupDir

The directory under which vaultwarden will backup its persistent data. Type: null or string Default: null Example: "/var/backup/vaultwarden" Declared by: <nixpkgs/nixos/modules/services/security/vaultwarden/default.nix>

## services.vaultwarden.config

The configuration of vaultwarden is done through environment variables, therefore it is recommended to use upper snake case (e.g. DISABLE_2FA_REMEMBER). However, camel case (e.g. disable2FARemember) is also supported: The NixOS module will convert it automatically to upper case snake case (e.g. DISABLE_2FA_REMEMBER). In this conversion digits (0-9) are handled just like upper case characters, so foo2 would be converted to FOO_2. Names already in this format remain unchanged, so FOO2 remains FOO2 if passed as such, even though foo2 would have been converted to FOO_2. This allows working around any potential future conflicting naming conventions. Based on the attributes passed to this config option an environment file will be generated that is passed to vaultwarden’s systemd service. The available configuration options can be found in the environment template file. See services.vaultwarden.environmentFile for how to set up access to the Admin UI to invite initial users. Type: attribute set of (null or boolean or signed integer or string) Default: { ROCKET_ADDRESS = "::1"; ROCKET_PORT = 8222; } Example: { DOMAIN = "https://bitwarden.example.com"; SIGNUPS_ALLOWED = false; # Vaultwarden recommends running behind a reverse proxy, the configureNginx option can be used for that. ROCKET_ADDRESS = "127.0.0.1"; ROCKET_PORT = 8222; ROCKET_LOG = "critical"; # This example assumes a mailserver running on localhost, # thus without transport encryption. # If you use an external mail server, follow: # https://github.com/dani-garcia/vaultwarden/wiki/SMTP-configuration SMTP_HOST = "127.0.0.1"; SMTP_PORT = 25; SMTP_SSL = false; SMTP_FROM = "admin@bitwarden.example.com"; SMTP_FROM_NAME = "example.com Bitwarden server"; } Declared by: <nixpkgs/nixos/modules/services/security/vaultwarden/default.nix>

## services.vaultwarden.configureNginx

Whether to configure nginx to serve VaultWarden. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/vaultwarden/default.nix>

## services.vaultwarden.configurePostgres

Whether to configure a local PostgreSQL server. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/vaultwarden/default.nix>

## services.vaultwarden.dbBackend

Which database backend vaultwarden will be using. Type: one of “sqlite”, “mysql”, “postgresql” Default: "sqlite" Declared by: <nixpkgs/nixos/modules/services/security/vaultwarden/default.nix>

## services.vaultwarden.domain

The domain under which VaultWarden will be reachable. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/vaultwarden/default.nix>

## services.vaultwarden.environmentFile

Additional environment file or files as defined in systemd.exec(5). Secrets like ADMIN_TOKEN and SMTP_PASSWORD should be passed to the service without adding them to the world-readable Nix store. Note that this file needs to be available on the host on which vaultwarden is running. As a concrete example, to make the Admin UI available (from which new users can be invited initially), the secret ADMIN_TOKEN needs to be defined as described here: # Admin secret token, see # https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page ADMIN_TOKEN=...copy-paste a unique generated secret token here... Type: (list of absolute path) or absolute path convertible to it Default: [ ] Example: "/var/lib/vaultwarden.env" Declared by: <nixpkgs/nixos/modules/services/security/vaultwarden/default.nix>

## services.vaultwarden.webVaultPackage

The webvault package to use. Type: package Default: pkgs.vaultwarden.webvault Declared by: <nixpkgs/nixos/modules/services/security/vaultwarden/default.nix>
