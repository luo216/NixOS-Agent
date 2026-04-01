---
module: services.weblate
option_count: 6
source: options.html
---

# services.weblate

## services.weblate.enable

Whether to enable Weblate service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>

## services.weblate.package

The weblate package to use. Type: package Default: pkgs.weblate Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>

## services.weblate.configurePostgresql

Whether to enable and configure a local PostgreSQL server by creating a user and database for weblate. The default settings reference this database, if you disable this option you must provide a database URL in extraConfig. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>

## services.weblate.djangoSecretKeyFile

Location of the Django secret key. This should be a path pointing to a file with secure permissions (not /nix/store). Can be generated with weblate-generate-secret-key which is available as the weblate user. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>

## services.weblate.extraConfig

Text to append to settings.py Weblate configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>

## services.weblate.localDomain

The domain name serving your Weblate instance. Type: string Example: "weblate.example.org" Declared by: <nixpkgs/nixos/modules/services/web-apps/weblate.nix>
