---
module: services.inspircd
option_count: 3
source: options.html
---

# services.inspircd

## services.inspircd.enable

Whether to enable InspIRCd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/inspircd.nix>

## services.inspircd.package

The InspIRCd package to use. This is mainly useful to specify an overridden version of the pkgs.inspircd dervivation, for example if you want to use a more minimal InspIRCd distribution with less modules enabled or with modules enabled which can’t be distributed in binary form due to licensing issues. Type: package Default: pkgs.inspircd Example: pkgs.inspircdMinimal Declared by: <nixpkgs/nixos/modules/services/networking/inspircd.nix>

## services.inspircd.config

Verbatim inspircd.conf file. For a list of options, consult the InspIRCd documentation, the Module documentation and the example configuration files distributed with pkgs.inspircd.doc Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/networking/inspircd.nix>
