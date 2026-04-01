---
module: services.tor.relay.onionServices.<name>
option_count: 7
source: options.html
---

# services.tor.relay.onionServices.<name>

## services.tor.relay.onionServices.<name>.authorizeClient

See torrc manual. Type: null or (submodule) Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.authorizedClients

Authorized clients for a v3 onion service, as a list of public key, in the format: descriptor:x25519:<base32-public-key> See torrc manual. Type: list of string Default: [ ] Example: [ "descriptor:x25519:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.map

See torrc manual. Type: list of (16 bit unsigned integer; between 0 and 65535 (both inclusive) or (submodule)) Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.path

Path where to store the data files of the hidden service. If the secretKey is null this defaults to /var/lib/tor/onion/$onion, otherwise to /run/tor/onion/$onion. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.secretKey

Secret key of the onion service. If null, Tor reuses any preexisting secret key (in path) or generates a new one. The associated public key and hostname are deterministically regenerated from this file if they do not exist. Type: null or absolute path Default: null Example: "/run/keys/tor/onion/expyuzz4wqqyqhjn/hs_ed25519_secret_key" Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.settings

Settings of the onion service. See torrc manual. Type: open submodule of settings option Default: { } Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.version

See torrc manual. Type: null or one of 2, 3 Default: null Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>
