---
module: services.namecoind
option_count: 5
source: options.html
---

# services.namecoind

## services.namecoind.enable

Whether to enable namecoind, Namecoin client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>

## services.namecoind.extraNodes

List of additional peer IP addresses to connect to. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>

## services.namecoind.generate

Whether to generate (mine) Namecoins. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>

## services.namecoind.trustedNodes

List of the only peer IP addresses to connect to. If specified no other connection will be made. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>

## services.namecoind.wallet

Wallet file. The ownership of the file has to be namecoin:namecoin, and the permissions must be 0640. Type: absolute path Default: "/var/lib/namecoind/wallet.dat" Declared by: <nixpkgs/nixos/modules/services/networking/namecoind.nix>
