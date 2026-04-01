---
module: services.karakeep
option_count: 4
source: options.html
---

# services.karakeep

## services.karakeep.enable

Whether to enable Enable the Karakeep service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/karakeep.nix>

## services.karakeep.package

The karakeep package to use. Type: package Default: pkgs.karakeep Declared by: <nixpkgs/nixos/modules/services/web-apps/karakeep.nix>

## services.karakeep.environmentFile

An optional path to an environment file that will be used in the web and workers services. This is useful for loading private keys. Type: null or absolute path Default: null Example: "/var/lib/karakeep/secrets.env" Declared by: <nixpkgs/nixos/modules/services/web-apps/karakeep.nix>

## services.karakeep.extraEnvironment

Environment variables to pass to Karakaeep. This is how most settings can be configured. Changing DATA_DIR is possible but not supported. See https://docs.karakeep.app/configuration/ Type: attribute set of string Default: { } Example: { PORT = "1234"; DISABLE_SIGNUPS = "true"; DISABLE_NEW_RELEASE_CHECK = "true"; } Declared by: <nixpkgs/nixos/modules/services/web-apps/karakeep.nix>
