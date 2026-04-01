---
module: services.tor.client
option_count: 3
source: options.html
---

# services.tor.client

## services.tor.client.enable

Whether to enable the routing of application connections. You might want to disable this if you plan running a dedicated Tor relay. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.client.onionServices

See torrc manual. Type: attribute set of (submodule) Default: { } Example: { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx = { clientAuthorizations = [ "/run/keys/tor/alice.prv.x25519" ]; }; } Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>

## services.tor.client.socksListenAddress

Bind to this address to listen for connections from Socks-speaking applications. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) or (submodule) Default: { IsolateDestAddr = true; addr = "127.0.0.1"; port = 9050; } Example: { IsolateDestAddr = true; addr = "192.168.0.1"; port = 9090; } Declared by: <nixpkgs/nixos/modules/services/security/tor.nix>
