---
module: services.pinnwand
option_count: 3
source: options.html
---

# services.pinnwand

## services.pinnwand.enable

Whether to enable Pinnwand, a pastebin. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/pinnwand.nix>

## services.pinnwand.port

The port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/misc/pinnwand.nix>

## services.pinnwand.settings

Your pinnwand.toml as a Nix attribute set. Look up possible options in the documentation. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/pinnwand.nix>
