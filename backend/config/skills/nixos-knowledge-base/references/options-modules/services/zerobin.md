---
module: services.zerobin
option_count: 7
source: options.html
---

# services.zerobin

## services.zerobin.enable

Whether to enable 0bin. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/zerobin.nix>

## services.zerobin.dataDir

Path to the 0bin data directory Type: string Default: "/var/lib/zerobin" Declared by: <nixpkgs/nixos/modules/services/networking/zerobin.nix>

## services.zerobin.extraConfig

Extra configuration to be appended to the 0bin config file (see https://0bin.readthedocs.org/en/latest/en/options.html) Type: strings concatenated with “\n” Default: "" Example: '' MENU = ( ('Home', '/'), ) COMPRESSED_STATIC_FILE = True '' Declared by: <nixpkgs/nixos/modules/services/networking/zerobin.nix>

## services.zerobin.group

The group 0bin should run as Type: string Default: "zerobin" Declared by: <nixpkgs/nixos/modules/services/networking/zerobin.nix>

## services.zerobin.listenAddress

The address zerobin should listen to Type: string Default: "localhost" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/zerobin.nix>

## services.zerobin.listenPort

The port zerobin should listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Example: 1357 Declared by: <nixpkgs/nixos/modules/services/networking/zerobin.nix>

## services.zerobin.user

The user 0bin should run as Type: string Default: "zerobin" Declared by: <nixpkgs/nixos/modules/services/networking/zerobin.nix>
