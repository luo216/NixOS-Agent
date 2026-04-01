---
module: services.keepalived.vrrpInstances.<name>.virtualIps.*
option_count: 5
source: options.html
---

# services.keepalived.vrrpInstances.<name>.virtualIps.*

## services.keepalived.vrrpInstances.<name>.virtualIps.*.addr

IP address, optionally with a netmask: IPADDR[/MASK] Type: string Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.virtualIps.*.brd

The broadcast address on the interface. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.virtualIps.*.dev

The name of the device to add the address to. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.virtualIps.*.label

Each address may be tagged with a label string. In order to preserve compatibility with Linux-2.0 net aliases, this string must coincide with the name of the device or must be prefixed with the device name followed by colon. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>

## services.keepalived.vrrpInstances.<name>.virtualIps.*.scope

The scope of the area where this address is valid. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/keepalived/default.nix>
