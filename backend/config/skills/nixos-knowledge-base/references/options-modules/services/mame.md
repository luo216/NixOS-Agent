---
module: services.mame
option_count: 4
source: options.html
---

# services.mame

## services.mame.enable

Whether to setup TUN/TAP Ethernet interface for MAME emulator. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/mame.nix>

## services.mame.emuAddr

IP address of the guest system. The same you set inside guest OS under MAME. Should be on the same subnet as services.mame.hostAddr. Type: string Example: "192.168.31.155" Declared by: <nixpkgs/nixos/modules/services/misc/mame.nix>

## services.mame.hostAddr

IP address of the host system. Usually an address of the main network adapter or the adapter through which you get an internet connection. Type: string Example: "192.168.31.156" Declared by: <nixpkgs/nixos/modules/services/misc/mame.nix>

## services.mame.user

User from which you run MAME binary. Type: string Declared by: <nixpkgs/nixos/modules/services/misc/mame.nix>
