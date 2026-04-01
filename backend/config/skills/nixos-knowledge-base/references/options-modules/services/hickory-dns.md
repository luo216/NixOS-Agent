---
module: services.hickory-dns
option_count: 6
source: options.html
---

# services.hickory-dns

## services.hickory-dns.enable

Whether to enable hickory-dns. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>

## services.hickory-dns.package

The hickory-dns package to use. ::: {.note} The package must provide meta.mainProgram which names the server binary; any other utilities (client, resolver) are not needed. ::: Type: package Default: pkgs.hickory-dns Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>

## services.hickory-dns.configFile

Path to an existing toml file to configure hickory-dns with. This can usually be left unspecified, in which case it will be generated from the values in settings. If manually specified, then the options in settings are ignored. Type: absolute path Default: let toml = pkgs.formats.toml { }; in toml.generate "hickory-dns.toml" cfg.settings Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>

## services.hickory-dns.debug

Log DEBUG, INFO, WARN and ERROR messages. This option is mutually exclusive with the debug option. If neither quiet nor debug are enabled, logging defaults to the INFO level. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>

## services.hickory-dns.quiet

Log ERROR level messages only. This option is mutually exclusive with the debug option. If neither quiet nor debug are enabled, logging defaults to the INFO level. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>

## services.hickory-dns.settings

Settings for hickory-dns. The options enumerated here are not exhaustive. Refer to upstream documentation for all available options: Example settings Type: open submodule of (TOML value) Declared by: <nixpkgs/nixos/modules/services/networking/hickory-dns.nix>
