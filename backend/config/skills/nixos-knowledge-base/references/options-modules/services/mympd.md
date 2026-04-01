---
module: services.mympd
option_count: 5
source: options.html
---

# services.mympd

## services.mympd.enable

Whether to enable MyMPD server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/mympd.nix>

## services.mympd.package

The mympd package to use. Type: package Default: pkgs.mympd Declared by: <nixpkgs/nixos/modules/services/audio/mympd.nix>

## services.mympd.extraGroups

Additional groups for the systemd service. Type: list of string Default: [ ] Example: [ "music" ] Declared by: <nixpkgs/nixos/modules/services/audio/mympd.nix>

## services.mympd.openFirewall

Open ports needed for the functionality of the program. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/audio/mympd.nix>

## services.mympd.settings

Manages the configuration files declaratively. For all the configuration options, see https://jcorporation.github.io/myMPD/020-configuration/configuration-files. Each key represents the “File” column from the upstream configuration table, and the value is the content of that file. Type: open submodule of attribute set of (null or string or boolean or signed integer) Declared by: <nixpkgs/nixos/modules/services/audio/mympd.nix>
