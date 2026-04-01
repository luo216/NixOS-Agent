---
module: services.nncp.caller
option_count: 2
source: options.html
---

# services.nncp.caller

## services.nncp.caller.enable

Whether to enable cron’ed NNCP TCP daemon caller. The daemon will take configuration from programs.nncp.settings . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/nncp.nix>

## services.nncp.caller.extraArgs

Extra command-line arguments to pass to caller. Type: list of string Default: [ ] Example: [ "-autotoss" ] Declared by: <nixpkgs/nixos/modules/services/networking/nncp.nix>
