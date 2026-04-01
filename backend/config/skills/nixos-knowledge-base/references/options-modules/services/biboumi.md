---
module: services.biboumi
option_count: 5
source: options.html
---

# services.biboumi

## services.biboumi.enable

Whether to enable the Biboumi XMPP gateway to IRC. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.package

The biboumi package to use. Type: package Default: pkgs.biboumi Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.credentialsFile

Path to a configuration file to be merged with the settings. Beware not to surround “=” with spaces when setting biboumi’s options in this file. Useful to merge a file which is better kept out of the Nix store because it contains sensible data like password. Type: absolute path Default: "/dev/null" Example: "/run/keys/biboumi.cfg" Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.openFirewall

Whether to enable opening of the identd port in the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>

## services.biboumi.settings

See biboumi 9.0 for documentation. Type: open submodule of settings option Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/biboumi.nix>
