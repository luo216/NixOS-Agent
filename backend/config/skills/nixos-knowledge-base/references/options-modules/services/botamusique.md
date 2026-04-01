---
module: services.botamusique
option_count: 3
source: options.html
---

# services.botamusique

## services.botamusique.enable

Whether to enable botamusique, a bot to play audio streams on mumble. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/botamusique.nix>

## services.botamusique.package

The botamusique package to use. Type: package Default: pkgs.botamusique Declared by: <nixpkgs/nixos/modules/services/audio/botamusique.nix>

## services.botamusique.settings

Your configuration.ini as a Nix attribute set. Look up possible options in the configuration.example.ini. Type: open submodule of attribute set of section of an INI file (attrs of INI atom (null, bool, int, float or string)) Default: { } Declared by: <nixpkgs/nixos/modules/services/audio/botamusique.nix>
