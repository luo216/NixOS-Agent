---
module: services.i2pd.reseed
option_count: 6
source: options.html
---

# services.i2pd.reseed

## services.i2pd.reseed.file

Full path to SU3 file to reseed from. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.reseed.floodfill

Path to router info of floodfill to reseed from. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.reseed.proxy

URL for reseed proxy, supports http/socks. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.reseed.urls

Reseed URLs. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.reseed.verify

Whether to enable SU3 signature verification. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>

## services.i2pd.reseed.zipfile

Path to local .zip file to reseed from. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/i2pd.nix>
