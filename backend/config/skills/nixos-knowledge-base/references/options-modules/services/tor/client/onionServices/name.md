---
module: services.tor.client.onionServices.<name>
option_count: 1
source: options.html
---

# services.tor.client.onionServices.<name>

## services.tor.client.onionServices.<name>.clientAuthorizations

Clients’ authorizations for a v3 onion service, as a list of files containing each one private key, in the format: descriptor:x25519:<base32-private-key> See torrc manual. Type: list of absolute path Default: [ ] Example: [ "/run/keys/tor/alice.prv.x25519" ] Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>
