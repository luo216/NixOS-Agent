---
module: services.lokinet.settings.network
option_count: 3
source: options.html
---

# services.lokinet.settings.network

## services.lokinet.settings.network.exit

Whether to act as an exit node. Beware that this increases demand on the server and may pose liability concerns. Enable at your own risk. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/lokinet.nix>

## services.lokinet.settings.network.exit-node

Specify a .loki address and an optional ip range to use as an exit broker. See http://probably.loki/wiki/index.php?title=Exit_Nodes for a list of exit nodes. Type: null or (list of string) Default: null Example: '' exit-node = [ "example.loki" ]; # maps all exit traffic to example.loki exit-node = [ "example.loki:100.0.0.0/24" ]; # maps 100.0.0.0/24 to example.loki '' Declared by: <nixpkgs/nixos/modules/services/networking/lokinet.nix>

## services.lokinet.settings.network.keyfile

The private key to persist address with. If not specified the address will be ephemeral. This keyfile is generated automatically if the specified file doesn’t exist. Type: null or string Default: null Example: "snappkey.private" Declared by: <nixpkgs/nixos/modules/services/networking/lokinet.nix>
