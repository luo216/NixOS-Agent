---
module: power.ups.upsd
option_count: 3
source: options.html
---

# power.ups.upsd

## power.ups.upsd.enable

Whether to enable upsd. Type: boolean Default: true if mode is one of standalone, netserver Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsd.extraConfig

Additional lines to add to upsd.conf. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>

## power.ups.upsd.listen

Address of the interface for upsd to listen on. See man upsd for details`. Type: list of (submodule) Default: [ ] Example: [ { address = "192.168.50.1"; } { address = "::1"; port = 5923; } ] Declared by: <nixpkgs/nixos/modules/services/monitoring/ups.nix>
