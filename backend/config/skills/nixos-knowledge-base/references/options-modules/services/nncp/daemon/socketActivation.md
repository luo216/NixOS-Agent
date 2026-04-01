---
module: services.nncp.daemon.socketActivation
option_count: 2
source: options.html
---

# services.nncp.daemon.socketActivation

## services.nncp.daemon.socketActivation.enable

Whether to enable socket activation for nncp-daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nncp.nix>

## services.nncp.daemon.socketActivation.listenStreams

TCP sockets to bind to. See systemd.sockets.<name>.listenStreams. Type: list of string Default: [ "5400" ] Declared by: <nixpkgs/nixos/modules/services/networking/nncp.nix>
