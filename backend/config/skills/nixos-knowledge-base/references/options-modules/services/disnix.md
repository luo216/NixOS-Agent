---
module: services.disnix
option_count: 6
source: options.html
---

# services.disnix

## services.disnix.enable

Whether to enable Disnix. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/disnix.nix>

## services.disnix.enableMultiUser

Whether to support multi-user mode by enabling the Disnix D-Bus service Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/misc/disnix.nix>

## services.disnix.enableProfilePath

Whether to enable exposing the Disnix profiles in the system’s PATH. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/disnix.nix>

## services.disnix.package

The disnix package to use. Type: package Default: pkgs.disnix Declared by: <nixpkgs/nixos/modules/services/misc/disnix.nix>

## services.disnix.profiles

Names of the Disnix profiles to expose in the system’s PATH Type: list of string Default: [ "default" ] Declared by: <nixpkgs/nixos/modules/services/misc/disnix.nix>

## services.disnix.useWebServiceInterface

Whether to enable the DisnixWebService interface running on Apache Tomcat. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/disnix.nix>
