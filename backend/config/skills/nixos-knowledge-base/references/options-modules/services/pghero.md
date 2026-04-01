---
module: services.pghero
option_count: 8
source: options.html
---

# services.pghero

## services.pghero.enable

Whether to enable PgHero service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/pghero.nix>

## services.pghero.package

The pghero package to use. Type: package Default: pkgs.pghero Declared by: <nixpkgs/nixos/modules/services/misc/pghero.nix>

## services.pghero.environment

Environment variables to set for the service. Secrets should be specified using environmentFile. Type: attribute set of string Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/pghero.nix>

## services.pghero.environmentFiles

File to load environment variables from. Loaded variables override values set in environment. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/pghero.nix>

## services.pghero.extraArgs

Additional command-line arguments for the systemd service. Refer to the Puma web server documentation for available arguments. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/pghero.nix>

## services.pghero.extraGroups

Additional groups for the systemd service. Type: list of string Default: [ ] Example: [ "tlskeys" ] Declared by: <nixpkgs/nixos/modules/services/misc/pghero.nix>

## services.pghero.listenAddress

hostname:port to listen for HTTP traffic. This is bound using the systemd socket activation. Type: string Example: "[::1]:3000" Declared by: <nixpkgs/nixos/modules/services/misc/pghero.nix>

## services.pghero.settings

PgHero configuration. Refer to the PgHero documentation for more details. Type: YAML 1.1 value Default: { } Example: { databases = { primary = { url = "<%= ENV['PRIMARY_DATABASE_URL'] %>"; }; }; } Declared by: <nixpkgs/nixos/modules/services/misc/pghero.nix>
