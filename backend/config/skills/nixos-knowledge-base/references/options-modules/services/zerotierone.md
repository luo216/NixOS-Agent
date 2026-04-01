---
module: services.zerotierone
option_count: 5
source: options.html
---

# services.zerotierone

## services.zerotierone.enable

Whether to enable ZeroTierOne. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/zerotierone.nix>

## services.zerotierone.package

The zerotierone package to use. Type: package Default: pkgs.zerotierone Declared by: <nixpkgs/nixos/modules/services/networking/zerotierone.nix>

## services.zerotierone.joinNetworks

List of ZeroTier Network IDs to join on startup. Note that networks are only ever joined, but not automatically left after removing them from the list. To remove networks, use the ZeroTier CLI: zerotier-cli leave <network-id> Type: list of string Default: [ ] Example: [ "a8a2c3c10c1a68de" ] Declared by: <nixpkgs/nixos/modules/services/networking/zerotierone.nix>

## services.zerotierone.localConf

Optional configuration to be written to the Zerotier JSON-based local.conf. If set, the configuration will be symlinked to /var/lib/zerotier-one/local.conf at build time. To understand the configuration format, refer to https://docs.zerotier.com/config/#local-configuration-options. Type: JSON value Default: { } Example: { settings = { allowTcpFallbackRelay = false; }; } Declared by: <nixpkgs/nixos/modules/services/networking/zerotierone.nix>

## services.zerotierone.port

Network port used by ZeroTier. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9993 Declared by: <nixpkgs/nixos/modules/services/networking/zerotierone.nix>
