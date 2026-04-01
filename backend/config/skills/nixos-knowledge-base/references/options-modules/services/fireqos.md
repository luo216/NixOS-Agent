---
module: services.fireqos
option_count: 2
source: options.html
---

# services.fireqos

## services.fireqos.enable

Whether to enable FireQOS. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/fireqos.nix>

## services.fireqos.config

The FireQOS configuration. Type: strings concatenated with “\n” Example: '' interface wlp3s0 world-in input rate 10mbit ethernet class web commit 50kbit match tcp ports 80,443 interface wlp3s0 world-out input rate 10mbit ethernet class web commit 50kbit match tcp ports 80,443 '' Declared by: <nixpkgs/nixos/modules/services/networking/fireqos.nix>
