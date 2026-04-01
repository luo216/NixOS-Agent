---
module: services.castopod
option_count: 9
source: options.html
---

# services.castopod

## services.castopod.enable

Whether to enable Castopod, a hosting platform for podcasters. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.package

The castopod package to use. Type: package Default: pkgs.castopod Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.configureNginx

Configure nginx as a reverse proxy for CastoPod. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.dataDir

The path where castopod stores all data. This path must be in sync with the castopod package (where it is hardcoded during the build in accordance with its own dataDir argument). Type: absolute path Default: "/var/lib/castopod" Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.environmentFile

Environment file to inject e.g. secrets into the configuration. See for available environment variables. This file is loaded using systemd LoadCredentials. Type: null or absolute path Default: null Example: "/run/keys/castopod-env" Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.localDomain

The domain serving your CastoPod instance. Type: string Example: "castopod.example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.maxUploadSize

Maximum supported size for a file upload in. Maximum HTTP body size is set to this value for nginx and PHP (because castopod doesn’t support chunked uploads yet: https://code.castopod.org/adaures/castopod/-/issues/330). Note, that practical upload size limit is smaller. For example, with 512 MiB setting - around 500 MiB is possible. Type: string Default: "512M" Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.poolSettings

Options for Castopod’s PHP pool. See the documentation on php-fpm.conf for details on configuration directives. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = "32"; "pm.max_requests" = "500"; "pm.max_spare_servers" = "4"; "pm.min_spare_servers" = "2"; "pm.start_servers" = "2"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>

## services.castopod.settings

Environment variables used for Castopod. See for available environment variables. Type: attribute set of (string or signed integer or boolean) Default: { } Example: { "email.SMTPHost" = "localhost"; "email.SMTPUser" = "myuser"; "email.fromEmail" = "castopod@example.com"; "email.protocol" = "smtp"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/castopod.nix>
