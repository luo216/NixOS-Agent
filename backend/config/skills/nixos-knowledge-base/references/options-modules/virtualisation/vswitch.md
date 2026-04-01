---
module: virtualisation.vswitch
option_count: 3
source: options.html
---

# virtualisation.vswitch

## virtualisation.vswitch.enable

Whether to enable Open vSwitch. A configuration daemon (ovs-server) will be started. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/openvswitch.nix>

## virtualisation.vswitch.package

The openvswitch package to use. Type: package Default: pkgs.openvswitch Declared by: <nixpkgs/nixos/modules/virtualisation/openvswitch.nix>

## virtualisation.vswitch.resetOnStart

Whether to reset the Open vSwitch configuration database to a default configuration on every start of the systemd ovsdb.service. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/virtualisation/openvswitch.nix>
