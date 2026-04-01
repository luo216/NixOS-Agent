---
module: services.wakapi
option_count: 8
source: options.html
---

# services.wakapi

## services.wakapi.enable

Whether to enable Wakapi. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>

## services.wakapi.package

The wakapi package to use. Type: package Default: pkgs.wakapi Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>

## services.wakapi.passwordSalt

The password salt to use for Wakapi. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>

## services.wakapi.passwordSaltFile

The path to a file containing the password salt to use for Wakapi. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>

## services.wakapi.settings

Settings for Wakapi. See config.default.yml for a list of all possible options. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>

## services.wakapi.smtpPassword

The password used for the smtp mailed to used by Wakapi. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>

## services.wakapi.smtpPasswordFile

The path to a file containing the password for the smtp mailer used by Wakapi. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>

## services.wakapi.stateDir

The state directory where data is stored. Will also be used as the working directory for the wakapi service. Type: absolute path Default: "/var/lib/wakapi" Declared by: <nixpkgs/nixos/modules/services/web-apps/wakapi.nix>
