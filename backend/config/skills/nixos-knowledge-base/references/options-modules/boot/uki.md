---
module: boot.uki
option_count: 5
source: options.html
---

# boot.uki

## boot.uki.configFile

The configuration file passed to ukify(1) to create the UKI. By default this configuration file is created from boot.uki.settings. Type: absolute path Declared by: <nixpkgs/nixos/modules/system/boot/uki.nix>

## boot.uki.name

Name of the UKI Type: string Declared by: <nixpkgs/nixos/modules/system/boot/uki.nix>

## boot.uki.settings

The configuration settings for ukify. These control what the UKI contains and how it is built. Type: attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Declared by: <nixpkgs/nixos/modules/system/boot/uki.nix>

## boot.uki.tries

Number of boot attempts before this UKI is considered bad. If no tries are specified (the default) automatic boot assessment remains inactive. See documentation on Automatic Boot Assessment and boot counting for more information. Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/system/boot/uki.nix>

## boot.uki.version

Version of the image or generation the UKI belongs to Type: null or string Default: config.system.image.version Declared by: <nixpkgs/nixos/modules/system/boot/uki.nix>
