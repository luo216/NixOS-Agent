---
module: services.tor.tsocks
option_count: 3
source: options.html
---

# services.tor.tsocks

## services.tor.tsocks.enable

Whether to build tsocks wrapper script to relay application traffic via Tor. Important You shouldn’t use this unless you know what you’re doing because your installation of Tor already comes with its own superior (doesn’t leak DNS queries) torsocks wrapper which does pretty much exactly the same thing as this. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/security/torify.nix>

## services.tor.tsocks.config

Extra configuration. Contents will be added verbatim to TSocks configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/security/torify.nix>

## services.tor.tsocks.server

IP address of TOR client to use. Type: string Default: "localhost:9050" Example: "192.168.0.20" Declared by: <nixpkgs/nixos/modules/services/security/torify.nix>
