---
module: services.tor.relay.onionServices.<name>.authorizeClient
option_count: 2
source: options.html
---

# services.tor.relay.onionServices.<name>.authorizeClient

## services.tor.relay.onionServices.<name>.authorizeClient.authType

Either "basic" for a general-purpose authorization protocol or "stealth" for a less scalable protocol that also hides service activity from unauthorized clients. Type: one of “basic”, “stealth” Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.relay.onionServices.<name>.authorizeClient.clientNames

Only clients that are listed here are authorized to access the hidden service. Generated authorization data can be found in /var/lib/tor/onion/$name/hostname. Clients need to put this authorization data in their configuration file using services.tor.settings.HidServAuth. Type: non-empty (list of string matching the pattern [A-Za-z0-9±_]+) Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>
