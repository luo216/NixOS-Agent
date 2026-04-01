---
module: services.tor.settings.HidServAuth.*
option_count: 2
source: options.html
---

# services.tor.settings.HidServAuth.*

## services.tor.settings.HidServAuth.*.auth

Authentication cookie. Type: string matching the pattern [A-Za-z0-9+/]{22} Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.settings.HidServAuth.*.onion

Onion address. Type: string matching the pattern [a-z2-7]{16}\.onion Example: "xxxxxxxxxxxxxxxx.onion" Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>
