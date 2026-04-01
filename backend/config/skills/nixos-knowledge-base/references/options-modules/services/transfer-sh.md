---
module: services.transfer-sh
option_count: 5
source: options.html
---

# services.transfer-sh

## services.transfer-sh.enable

Whether to enable Easy and fast file sharing from the command-line. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/transfer-sh.nix>

## services.transfer-sh.package

The transfer-sh package to use. Type: package Default: pkgs.transfer-sh Declared by: <nixpkgs/nixos/modules/services/misc/transfer-sh.nix>

## services.transfer-sh.provider

Storage providers to use Type: one of “local”, “s3”, “storj”, “gdrive” Default: "local" Declared by: <nixpkgs/nixos/modules/services/misc/transfer-sh.nix>

## services.transfer-sh.secretFile

Path to file containing environment variables. Useful for passing down secrets. Some variables that can be considered secrets are: AWS_ACCESS_KEY AWS_ACCESS_KEY TLS_PRIVATE_KEY HTTP_AUTH_HTPASSWD Type: null or absolute path Default: null Example: "/run/secrets/transfer-sh.env" Declared by: <nixpkgs/nixos/modules/services/misc/transfer-sh.nix>

## services.transfer-sh.settings

Additional configuration for transfer-sh, see https://github.com/dutchcoders/transfer.sh#usage-1 for supported values. For secrets use secretFile option instead. Type: open submodule of attribute set of (boolean or signed integer or string) Default: { } Example: { BASEDIR = "/var/lib/transfer.sh"; LISTENER = ":8080"; TLS_LISTENER_ONLY = false; } Declared by: <nixpkgs/nixos/modules/services/misc/transfer-sh.nix>
