---
module: services.zeronet
option_count: 7
source: options.html
---

# services.zeronet

## services.zeronet.enable

Whether to enable zeronet. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/zeronet.nix>

## services.zeronet.package

The zeronet package to use. Type: package Default: pkgs.zeronet Declared by: <nixpkgs/nixos/modules/services/networking/zeronet.nix>

## services.zeronet.fileserverPort

Zeronet fileserver port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 12261 Declared by: <nixpkgs/nixos/modules/services/networking/zeronet.nix>

## services.zeronet.port

Optional zeronet web UI port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 43110 Declared by: <nixpkgs/nixos/modules/services/networking/zeronet.nix>

## services.zeronet.settings

zeronet.conf configuration. Refer to https://zeronet.readthedocs.io/en/latest/faq/#is-it-possible-to-use-a-configuration-file for details on supported values; Type: attribute set of attribute set of (string or signed integer or boolean or list of string) Default: { } Example: { global.tor = enable; } Declared by: <nixpkgs/nixos/modules/services/networking/zeronet.nix>

## services.zeronet.tor

Use TOR for zeronet traffic where possible. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/zeronet.nix>

## services.zeronet.torAlways

Use TOR for all zeronet traffic. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/zeronet.nix>
