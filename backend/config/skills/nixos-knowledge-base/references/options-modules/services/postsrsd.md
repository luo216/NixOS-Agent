---
module: services.postsrsd
option_count: 7
source: options.html
---

# services.postsrsd

## services.postsrsd.enable

Whether to enable the postsrsd SRS server for Postfix… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.package

The postsrsd package to use. Type: package Default: pkgs.postsrsd Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.configurePostfix

Whether to configure the required settings to use postsrsd in the local Postfix instance. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.group

Group for the daemon Type: string Default: "postsrsd" Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.secretsFile

Secret keys used for signing and verification. Note The secret will be generated, if it does not exist at the given path. Type: absolute path Default: "/var/lib/postsrsd/postsrsd.secret" Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.settings

Configuration options for the postsrsd.conf file. See the example configuration for possible values. Type: open submodule of attribute set of (boolean or floating point number or signed integer or absolute path or string or list of string) Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>

## services.postsrsd.user

User for the daemon Type: string Default: "postsrsd" Declared by: <nixpkgs/nixos/modules/services/mail/postsrsd.nix>
