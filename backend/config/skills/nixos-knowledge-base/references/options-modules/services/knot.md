---
module: services.knot
option_count: 8
source: options.html
---

# services.knot

## services.knot.enable

Whether to enable Knot authoritative-only DNS server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/knot.nix>

## services.knot.enableXDP

Extends the systemd unit with permissions to allow for the use of the eXpress Data Path (XDP). Note Make sure to read up on functional limitations when running in XDP mode. Type: boolean Default: '' Enabled when the `xdp.listen` setting is configured through `settings`. '' Example: true Declared by: <nixpkgs/nixos/modules/services/networking/knot.nix>

## services.knot.package

The knot-dns package to use. Type: package Default: pkgs.knot-dns Declared by: <nixpkgs/nixos/modules/services/networking/knot.nix>

## services.knot.checkConfig

Toggles the configuration test at build time. It runs in a sandbox, and therefore cannot be used in all scenarios. Type: boolean Default: '' Disabled when the config uses `keyFiles` or `enableXDP`. '' Example: false Declared by: <nixpkgs/nixos/modules/services/networking/knot.nix>

## services.knot.extraArgs

List of additional command line parameters for knotd Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/knot.nix>

## services.knot.keyFiles

A list of files containing additional configuration to be included using the include directive. This option allows to include configuration like TSIG keys without exposing them to the nix store readable to any process. Note that using this option will also disable configuration checks at build time. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/knot.nix>

## services.knot.settings

Extra configuration as nix values. Type: YAML 1.1 value Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/knot.nix>

## services.knot.settingsFile

As alternative to settings, you can provide whole configuration directly in the almost-YAML format of Knot DNS. You might want to utilize pkgs.writeText "knot.conf" "longConfigString" for this. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/knot.nix>
