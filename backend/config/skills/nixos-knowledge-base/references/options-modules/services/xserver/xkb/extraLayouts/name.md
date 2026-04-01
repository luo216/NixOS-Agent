---
module: services.xserver.xkb.extraLayouts.<name>
option_count: 7
source: options.html
---

# services.xserver.xkb.extraLayouts.<name>

## services.xserver.xkb.extraLayouts.<name>.compatFile

The path to the xkb compat file. This file sets the compatibility state, used to preserve compatibility with xkb-unaware programs. It must contain a xkb_compat "name" { ... } block. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/x11/extra-layouts.nix>

## services.xserver.xkb.extraLayouts.<name>.description

A short description of the layout. Type: string Declared by: <nixpkgs/nixos/modules/services/x11/extra-layouts.nix>

## services.xserver.xkb.extraLayouts.<name>.geometryFile

The path to the xkb geometry file. This (completely optional) file describes the physical layout of keyboard, which maybe be used by programs to depict it. It must contain a xkb_geometry "name" { ... } block. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/x11/extra-layouts.nix>

## services.xserver.xkb.extraLayouts.<name>.keycodesFile

The path to the xkb keycodes file. This file specifies the range and the interpretation of the raw keycodes sent by the keyboard. It must contain a xkb_keycodes "name" { ... } block. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/x11/extra-layouts.nix>

## services.xserver.xkb.extraLayouts.<name>.languages

A list of languages provided by the layout. (Use ISO 639-2 codes, for example: “eng” for english) Type: list of string Declared by: <nixpkgs/nixos/modules/services/x11/extra-layouts.nix>

## services.xserver.xkb.extraLayouts.<name>.symbolsFile

The path to the xkb symbols file. This is the most important file: it defines which symbol or action maps to each key and must contain a xkb_symbols "name" { ... } block. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/x11/extra-layouts.nix>

## services.xserver.xkb.extraLayouts.<name>.typesFile

The path to the xkb types file. This file specifies the key types that can be associated with the various keyboard keys. It must contain a xkb_types "name" { ... } block. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/x11/extra-layouts.nix>
