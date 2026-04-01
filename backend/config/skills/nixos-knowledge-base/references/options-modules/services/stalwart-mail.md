---
module: services.stalwart-mail
option_count: 6
source: options.html
---

# services.stalwart-mail

## services.stalwart-mail.enable

Whether to enable the Stalwart all-in-one email server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/stalwart-mail.nix>

## services.stalwart-mail.package

The stalwart-mail package to use. Type: package Default: pkgs.stalwart-mail Declared by: <nixpkgs/nixos/modules/services/mail/stalwart-mail.nix>

## services.stalwart-mail.credentials

Credentials envs used to configure Stalwart-Mail secrets. These secrets can be accessed in configuration values with the macros such as %{file:/run/credentials/stalwart-mail.service/VAR_NAME}%. Type: attribute set of string Default: { } Example: { user_admin_password = "/run/keys/stalwart_admin_password"; } Declared by: <nixpkgs/nixos/modules/services/mail/stalwart-mail.nix>

## services.stalwart-mail.dataDir

Data directory for stalwart Type: absolute path Default: "/var/lib/stalwart-mail" Declared by: <nixpkgs/nixos/modules/services/mail/stalwart-mail.nix>

## services.stalwart-mail.openFirewall

Whether to open TCP firewall ports, which are specified in services.stalwart-mail.settings.server.listener on all interfaces. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/stalwart-mail.nix>

## services.stalwart-mail.settings

Configuration options for the Stalwart email server. See https://stalw.art/docs/category/configuration for available options. By default, the module is configured to store everything locally. Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/stalwart-mail.nix>
