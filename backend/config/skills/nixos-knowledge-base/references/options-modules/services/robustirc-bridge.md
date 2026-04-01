---
module: services.robustirc-bridge
option_count: 2
source: options.html
---

# services.robustirc-bridge

## services.robustirc-bridge.enable

Whether to enable RobustIRC bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/robustirc-bridge.nix>

## services.robustirc-bridge.extraFlags

Extra flags passed to the robustirc-bridge command. See RobustIRC Documentation or robustirc-bridge(1) for details. Type: list of string Default: [ ] Example: [ "-network robustirc.net" ] Declared by: <nixpkgs/nixos/modules/services/networking/robustirc-bridge.nix>
