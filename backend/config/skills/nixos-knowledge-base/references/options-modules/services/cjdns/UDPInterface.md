---
module: services.cjdns.UDPInterface
option_count: 2
source: options.html
---

# services.cjdns.UDPInterface

## services.cjdns.UDPInterface.bind

Address and port to bind UDP tunnels to. Type: string Default: "" Example: "192.168.1.32:43211" Declared by: <nixpkgs/nixos/modules/services/networking/cjdns.nix>

## services.cjdns.UDPInterface.connectTo

Credentials for making UDP tunnels. Type: attribute set of (submodule) Default: { } Example: { "192.168.1.1:27313" = { hostname = "homer.hype"; password = "5kG15EfpdcKNX3f2GSQ0H1HC7yIfxoCoImnO5FHM"; publicKey = "371zpkgs8ss387tmr81q04mp0hg1skb51hw34vk1cq644mjqhup0.k"; }; } Declared by: <nixpkgs/nixos/modules/services/networking/cjdns.nix>
