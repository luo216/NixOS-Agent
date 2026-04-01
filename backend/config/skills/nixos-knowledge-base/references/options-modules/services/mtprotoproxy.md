---
module: services.mtprotoproxy
option_count: 6
source: options.html
---

# services.mtprotoproxy

## services.mtprotoproxy.enable

Whether to enable mtprotoproxy. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/mtprotoproxy.nix>

## services.mtprotoproxy.adTag

Tag for advertising that can be obtained from @MTProxybot. Type: null or string Default: null Example: "3c09c680b76ee91a4c25ad51f742267d" Declared by: <nixpkgs/nixos/modules/services/networking/mtprotoproxy.nix>

## services.mtprotoproxy.extraConfig

Extra configuration options for mtprotoproxy. Type: attribute set Default: { } Example: { STATS_PRINT_PERIOD = 600; } Declared by: <nixpkgs/nixos/modules/services/networking/mtprotoproxy.nix>

## services.mtprotoproxy.port

TCP port to accept mtproto connections on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3256 Declared by: <nixpkgs/nixos/modules/services/networking/mtprotoproxy.nix>

## services.mtprotoproxy.secureOnly

Don’t allow users to connect in non-secure mode (without random padding). Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/mtprotoproxy.nix>

## services.mtprotoproxy.users

Allowed users and their secrets. A secret is a 32 characters long hex string. Type: attribute set of string Example: { tg = "00000000000000000000000000000000"; tg2 = "0123456789abcdef0123456789abcdef"; } Declared by: <nixpkgs/nixos/modules/services/networking/mtprotoproxy.nix>
