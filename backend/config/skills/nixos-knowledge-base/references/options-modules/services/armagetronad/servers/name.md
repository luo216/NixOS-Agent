---
module: services.armagetronad.servers.<name>
option_count: 9
source: options.html
---

# services.armagetronad.servers.<name>

## services.armagetronad.servers.<name>.enable

Whether to enable armagetronad. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/games/armagetronad.nix>

## services.armagetronad.servers.<name>.package

The armagetronad-dedicated package to use. Ensure that you use a derivation which contains the path bin/armagetronad-dedicated. Type: package Default: pkgs.armagetronad-dedicated Example: pkgs.armagetronad."0.2.9-sty+ct+ap".dedicated Declared by: <nixpkgs/nixos/modules/services/games/armagetronad.nix>

## services.armagetronad.servers.<name>.dns

DNS address to use for this server. Optional. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/games/armagetronad.nix>

## services.armagetronad.servers.<name>.host

Host to listen on. Used for SERVER_IP. Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/games/armagetronad.nix>

## services.armagetronad.servers.<name>.name

The name of this server. Type: string Declared by: <nixpkgs/nixos/modules/services/games/armagetronad.nix>

## services.armagetronad.servers.<name>.openFirewall

Set to true to open the configured UDP port for Armagetron Advanced. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/games/armagetronad.nix>

## services.armagetronad.servers.<name>.port

Port to listen on. Used for SERVER_PORT. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 4534 Declared by: <nixpkgs/nixos/modules/services/games/armagetronad.nix>

## services.armagetronad.servers.<name>.roundSettings

Armagetron Advanced server per-round configuration. Refer to: https://wiki.armagetronad.org/index.php?title=Console_Commands or armagetronad-dedicated --doc for a list. This attrset is used to populate everytime.cfg; see: https://wiki.armagetronad.org/index.php/Configuration_Files Type: attribute set of (atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Example: { SAY = [ "Hosted on NixOS" "https://nixos.org" "iD Tech High Rubber rul3z!! Happy New Year 2008!!1" ]; } Declared by: <nixpkgs/nixos/modules/services/games/armagetronad.nix>

## services.armagetronad.servers.<name>.settings

Armagetron Advanced server rules configuration. Refer to: https://wiki.armagetronad.org/index.php?title=Console_Commands or armagetronad-dedicated --doc for a list. This attrset is used to populate settings_custom.cfg; see: https://wiki.armagetronad.org/index.php/Configuration_Files Type: attribute set of (atom (null, bool, int, float or string) or a list of them for duplicate keys) Default: { } Example: { CYCLE_RUBBER = 40; } Declared by: <nixpkgs/nixos/modules/services/games/armagetronad.nix>
