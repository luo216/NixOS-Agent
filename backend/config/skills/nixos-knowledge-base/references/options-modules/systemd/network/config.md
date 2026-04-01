---
module: systemd.network.config
option_count: 5
source: options.html
---

# systemd.network.config

## systemd.network.config.addRouteTablesToIPRoute2

If true and routeTables are set, then the specified route tables will also be installed into /etc/iproute2/rt_tables. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.config.dhcpV4Config

Each attribute in this set specifies an option in the [DHCPv4] section of the networkd config. See networkd.conf(5) for details. Type: attribute set of (systemd option) Default: { } Example: { DUIDType = "vendor"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.config.dhcpV6Config

Each attribute in this set specifies an option in the [DHCPv6] section of the networkd config. See networkd.conf(5) for details. Type: attribute set of (systemd option) Default: { } Example: { DUIDType = "vendor"; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.config.networkConfig

Each attribute in this set specifies an option in the [Network] section of the networkd config. See networkd.conf(5) for details. Type: attribute set of (systemd option) Default: { IPv6PrivacyExtensions = true; } Example: { ManageForeignRoutingPolicyRules = false; SpeedMeter = true; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>

## systemd.network.config.routeTables

Defines route table names as an attrset of name to number. See networkd.conf(5) for details. Type: attribute set of signed integer Default: { } Example: { foo = 27; } Declared by: <nixpkgs/nixos/modules/system/boot/networkd.nix>
