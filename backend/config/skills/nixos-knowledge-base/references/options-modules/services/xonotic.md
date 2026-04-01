---
module: services.xonotic
option_count: 7
source: options.html
---

# services.xonotic

## services.xonotic.enable

Whether to enable Xonotic dedicated server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.package

The xonotic-dedicated package to use. Type: package Default: pkgs.xonotic-dedicated Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.appendConfig

Literal text to insert at the end of server.cfg. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.dataDir

Data directory. Type: absolute path (read only) Default: "/var/lib/xonotic" Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.openFirewall

Open the firewall for TCP and UDP on the specified port. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.prependConfig

Literal text to insert at the start of server.cfg. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>

## services.xonotic.settings

Generates the server.cfg file. Refer to upstream’s example for details. Type: open submodule of attribute set of ((optionally newline-terminated) single-line string or signed integer or floating point number or non-empty (list of ((optionally newline-terminated) single-line string or signed integer or floating point number))) Default: { } Declared by: <nixpkgs/nixos/modules/services/games/xonotic.nix>
