---
module: services.networkd-dispatcher.rules.<name>
option_count: 2
source: options.html
---

# services.networkd-dispatcher.rules.<name>

## services.networkd-dispatcher.rules.<name>.onState

List of names of the systemd-networkd operational states which should trigger the script. See networkctl(1) for a description of the specific state type. Type: list of (one of “routable”, “dormant”, “no-carrier”, “off”, “carrier”, “degraded”, “configuring”, “configured”, “enslaved”) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/networkd-dispatcher.nix>

## services.networkd-dispatcher.rules.<name>.script

Shell commands executed on specified operational states. Type: strings concatenated with “\n” Declared by: <nixpkgs/nixos/modules/services/networking/networkd-dispatcher.nix>
