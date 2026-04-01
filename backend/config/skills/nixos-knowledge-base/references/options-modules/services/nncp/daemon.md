---
module: services.nncp.daemon
option_count: 2
source: options.html
---

# services.nncp.daemon

## services.nncp.daemon.enable

Whether to enable NNCP TCP synronization daemon. The daemon will take configuration from programs.nncp.settings . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nncp.nix>

## services.nncp.daemon.extraArgs

Extra command-line arguments to pass to daemon. Type: list of string Default: [ ] Example: [ "-autotoss" ] Declared by: <nixpkgs/nixos/modules/services/networking/nncp.nix>
