---
module: services.softether.vpnclient
option_count: 3
source: options.html
---

# services.softether.vpnclient

## services.softether.vpnclient.enable

Whether to enable SoftEther VPN Client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/softether.nix>

## services.softether.vpnclient.down

Shell commands executed when the Virtual Network Adapter(s) is/are shutting down. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/softether.nix>

## services.softether.vpnclient.up

Shell commands executed when the Virtual Network Adapter(s) is/are starting. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/softether.nix>
