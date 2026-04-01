---
module: services.i2pd.ntcp2
option_count: 3
source: options.html
---

# services.i2pd.ntcp2

## services.i2pd.ntcp2.enable

Whether to enable NTCP2. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.ntcp2.port

Port to listen for incoming NTCP2 connections (0=auto). Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 0 Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.ntcp2.published

Whether to enable NTCP2 publication. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
