---
module: services.blendfarm.serverConfig
option_count: 3
source: options.html
---

# services.blendfarm.serverConfig

## services.blendfarm.serverConfig.BroadcastPort

Default port blendfarm server advertises itself on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 16342 Declared by: <nixpkgs/nixos/modules/services/misc/blenderfarm.nix>

## services.blendfarm.serverConfig.BypassScriptUpdate

Prevents blendfarm from replacing the .py self-generated scripts. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/blenderfarm.nix>

## services.blendfarm.serverConfig.Port

Default port blendfarm server listens on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 15000 Declared by: <nixpkgs/nixos/modules/services/misc/blenderfarm.nix>
