---
module: services.readeck
option_count: 4
source: options.html
---

# services.readeck

## services.readeck.enable

Whether to enable Readeck. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/readeck.nix>

## services.readeck.package

The readeck package to use. Type: package Default: pkgs.readeck Declared by: <nixpkgs/nixos/modules/services/web-apps/readeck.nix>

## services.readeck.environmentFile

File containing environment variables to be passed to Readeck. May be used to provide the Readeck secret key by setting the READECK_SECRET_KEY variable. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/readeck.nix>

## services.readeck.settings

Additional configuration for Readeck, see https://readeck.org/en/docs/configuration for supported values. Type: TOML value Default: { } Example: { main = { log_level = "debug"; }; server = { port = 9000; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/readeck.nix>
