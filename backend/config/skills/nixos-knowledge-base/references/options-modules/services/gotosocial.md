---
module: services.gotosocial
option_count: 6
source: options.html
---

# services.gotosocial

## services.gotosocial.enable

Whether to enable ActivityPub social network server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/gotosocial.nix>

## services.gotosocial.package

The gotosocial package to use. Type: package Default: pkgs.gotosocial Declared by: <nixpkgs/nixos/modules/services/web-apps/gotosocial.nix>

## services.gotosocial.environmentFile

File path containing environment variables for configuring the GoToSocial service in the format of an EnvironmentFile as described by systemd.exec(5). This option could be used to pass sensitive configuration to the GoToSocial daemon. Please refer to the Environment Variables section in the documentation. Type: null or absolute path Default: null Example: "/root/nixos/secrets/gotosocial.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/gotosocial.nix>

## services.gotosocial.openFirewall

Open the configured port in the firewall. Using a reverse proxy instead is highly recommended. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/gotosocial.nix>

## services.gotosocial.settings

Contents of the GoToSocial YAML config. Please refer to the documentation and example config. Please note that the host option cannot be changed later so it is important to configure this correctly before you start GoToSocial. Type: YAML 1.1 value Default: { application-name = "gotosocial"; bind-address = "127.0.0.1"; db-address = "/var/lib/gotosocial/database.sqlite"; db-type = "sqlite"; port = 8080; protocol = "https"; storage-local-base-path = "/var/lib/gotosocial/storage"; } Example: { application-name = "My GoToSocial"; host = "gotosocial.example.com"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/gotosocial.nix>

## services.gotosocial.setupPostgresqlDB

Whether to setup a local postgres database and populate the db-type fields in services.gotosocial.settings. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/gotosocial.nix>
