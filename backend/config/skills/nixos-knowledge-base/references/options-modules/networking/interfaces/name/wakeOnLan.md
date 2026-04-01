---
module: networking.interfaces.<name>.wakeOnLan
option_count: 2
source: options.html
---

# networking.interfaces.<name>.wakeOnLan

## networking.interfaces.<name>.wakeOnLan.enable

Whether to enable wol on this interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.interfaces.<name>.wakeOnLan.policy

The Wake-on-LAN policy to set for the device. The options are phy: Wake on PHY activity unicast: Wake on unicast messages multicast: Wake on multicast messages broadcast: Wake on broadcast messages arp: Wake on ARP magic: Wake on receipt of a magic packet Type: list of (one of “phy”, “unicast”, “multicast”, “broadcast”, “arp”, “magic”, “secureon”) Default: [ "magic" ] Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
