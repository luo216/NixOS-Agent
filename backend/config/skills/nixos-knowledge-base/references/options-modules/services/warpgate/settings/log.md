---
module: services.warpgate.settings.log
option_count: 2
source: options.html
---

# services.warpgate.settings.log

## services.warpgate.settings.log.retention

How long Warpgate keep its logs. Type: string Default: "7days" Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>

## services.warpgate.settings.log.send_to

Path of UNIX socket of log forwarder. See Log forwarding; Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/security/warpgate.nix>
