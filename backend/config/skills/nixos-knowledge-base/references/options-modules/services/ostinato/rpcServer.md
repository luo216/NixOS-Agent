---
module: services.ostinato.rpcServer
option_count: 1
source: options.html
---

# services.ostinato.rpcServer

## services.ostinato.rpcServer.address

By default, the Drone RPC server will listen on all interfaces and local IPv4 addresses for incoming connections from clients. Specify a single IPv4 or IPv6 address if you want to restrict that. To listen on any IPv6 address, use :: Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/ostinato.nix>
