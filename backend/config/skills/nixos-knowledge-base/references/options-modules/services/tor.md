---
module: services.tor
option_count: 6
source: options.html
---

# services.tor

## services.tor.enable

Whether to enable Tor daemon. By default, the daemon is run without relay, exit, bridge or client connectivity. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.enableGeoIP

Whether to enable use of GeoIP databases. Disabling this will disable by-country statistics for bridges and relays and some client and third-party software functionality. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.package

The tor package to use. Type: package Default: pkgs.tor Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.obfs4Package

The obfs4 package to use. Type: package Default: pkgs.obfs4 Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.openFirewall

Whether to enable opening of the relay port(s) in the firewall. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings

See torrc manual for documentation. Type: open submodule of settings option Default: { } Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>
