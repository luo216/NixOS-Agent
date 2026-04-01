---
module: services.cjdns.ETHInterface
option_count: 3
source: options.html
---

# services.cjdns.ETHInterface

## services.cjdns.ETHInterface.beacon

Auto-connect to other cjdns nodes on the same network. Options: 0: Disabled. 1: Accept beacons, this will cause cjdns to accept incoming beacon messages and try connecting to the sender. 2: Accept and send beacons, this will cause cjdns to broadcast messages on the local network which contain a randomly generated per-session password, other nodes which have this set to 1 or 2 will hear the beacon messages and connect automatically. Type: signed integer Default: 2 Declared by: <nixpkgs/nixos/modules/services/networking/cjdns.nix>

## services.cjdns.ETHInterface.bind

Bind to this device for native ethernet operation. all is a pseudo-name which will try to connect to all devices. Type: string Default: "" Example: "eth0" Declared by: <nixpkgs/nixos/modules/services/networking/cjdns.nix>

## services.cjdns.ETHInterface.connectTo

Credentials for connecting look similar to UDP credientials except they begin with the mac address. Type: attribute set of (submodule) Default: { } Example: { "01:02:03:04:05:06" = { hostname = "homer.hype"; password = "5kG15EfpdcKNX3f2GSQ0H1HC7yIfxoCoImnO5FHM"; publicKey = "371zpkgs8ss387tmr81q04mp0hg1skb51hw34vk1cq644mjqhup0.k"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/cjdns.nix>
