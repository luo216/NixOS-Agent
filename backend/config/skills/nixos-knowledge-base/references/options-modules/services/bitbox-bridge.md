---
module: services.bitbox-bridge
option_count: 4
source: options.html
---

# services.bitbox-bridge

## services.bitbox-bridge.enable

Whether to enable Bitbox bridge daemon, for use with Bitbox hardware wallets… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/bitbox-bridge.nix>

## services.bitbox-bridge.package

The bitbox-bridge package to use. Type: package Default: pkgs.bitbox-bridge Declared by: <nixpkgs/nixos/modules/services/hardware/bitbox-bridge.nix>

## services.bitbox-bridge.port

Listening port for the bitbox-bridge. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8178 Declared by: <nixpkgs/nixos/modules/services/hardware/bitbox-bridge.nix>

## services.bitbox-bridge.runOnMount

Run bitbox-bridge.service only when hardware wallet is plugged, also registers the systemd device unit. This option is enabled by default to save power, when false, bitbox-bridge service runs all the time instead. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/hardware/bitbox-bridge.nix>
