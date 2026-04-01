---
module: systemd.network.links.<name>
option_count: 4
source: options.html
---

# systemd.network.links.<name>

## systemd.network.links.<name>.enable

Whether to enable this .link unit. It’s handled by udev no matter if systemd-networkd is enabled or not Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.links.<name>.extraConfig

Extra configuration append to unit Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.links.<name>.linkConfig

Each attribute in this set specifies an option in the [Link] section of the unit. See systemd.link(5) for details. Type: attribute set of (systemd option) Default: { } Example: { MACAddress = "00:ff:ee:aa:cc:dd"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.links.<name>.matchConfig

Each attribute in this set specifies an option in the [Match] section of the unit. See systemd.link(5) systemd.netdev(5) systemd.network(5) for details. Type: attribute set of (systemd option) Default: { } Example: { Name = "eth0"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>
