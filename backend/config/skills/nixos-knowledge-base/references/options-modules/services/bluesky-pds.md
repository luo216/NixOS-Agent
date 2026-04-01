---
module: services.bluesky-pds
option_count: 4
source: options.html
---

# services.bluesky-pds

## services.bluesky-pds.enable

Whether to enable pds. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.package

The bluesky-pds package to use. Type: package Default: pkgs.bluesky-pds Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.environmentFiles

File to load environment variables from. Loaded variables override values set in environment. Use it to set values of PDS_JWT_SECRET, PDS_ADMIN_PASSWORD, and PDS_PLC_ROTATION_KEY_K256_PRIVATE_KEY_HEX secrets. PDS_JWT_SECRET and PDS_ADMIN_PASSWORD can be generated with openssl rand --hex 16 PDS_PLC_ROTATION_KEY_K256_PRIVATE_KEY_HEX can be generated with openssl ecparam --name secp256k1 --genkey --noout --outform DER | tail --bytes=+8 | head --bytes=32 | xxd --plain --cols 32 Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>

## services.bluesky-pds.settings

Environment variables to set for the service. Secrets should be specified using environmentFile. Refer to https://github.com/bluesky-social/atproto/blob/main/packages/pds/src/config/env.ts for available environment variables. Type: open submodule of attribute set of (null or string or 16 bit unsigned integer; between 0 and 65535 (both inclusive)) Declared by: <nixpkgs/nixos/modules/services/web-apps/bluesky-pds.nix>
