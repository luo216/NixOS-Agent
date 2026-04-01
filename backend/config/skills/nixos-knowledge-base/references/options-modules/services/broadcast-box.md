---
module: services.broadcast-box
option_count: 4
source: options.html
---

# services.broadcast-box

## services.broadcast-box.enable

Whether to enable Broadcast Box. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/broadcast-box.nix>

## services.broadcast-box.package

The broadcast-box package to use. Type: package Default: pkgs.broadcast-box Declared by: <nixpkgs/nixos/modules/services/video/broadcast-box.nix>

## services.broadcast-box.openFirewall

Whether to enable opening WebRTC traffic ports in the firewall. Randomly selected ports will not be opened. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/broadcast-box.nix>

## services.broadcast-box.settings

Attribute set of environment variables. https://github.com/Glimesh/broadcast-box#environment-variables Warning The status API exposes stream keys so DISABLE_STATUS is enabled by default. Type: open submodule of attribute set of (null or boolean or signed integer or string) Default: { DISABLE_STATUS = true; } Example: { DISABLE_STATUS = true; INCLUDE_PUBLIC_IP_IN_NAT_1_TO_1_IP = true; UDP_MUX_PORT = 3000; } Declared by: <nixpkgs/nixos/modules/services/video/broadcast-box.nix>
