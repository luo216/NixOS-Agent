---
module: services.cjdns.ETHInterface.connectTo.<name>
option_count: 5
source: options.html
---

# services.cjdns.ETHInterface.connectTo.<name>

## services.cjdns.ETHInterface.connectTo.<name>.hostname

Optional hostname to add to /etc/hosts; prevents reverse lookup failures. Type: string Default: "" Example: "foobar.hype" Declared by: <nixpkgs/nixos/modules/services/networking/cjdns.nix>

## services.cjdns.ETHInterface.connectTo.<name>.login

(optional) name your peer has for you Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/cjdns.nix>

## services.cjdns.ETHInterface.connectTo.<name>.password

Authorized password to the opposite end of the tunnel. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/cjdns.nix>

## services.cjdns.ETHInterface.connectTo.<name>.peerName

(optional) human-readable name for peer Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/cjdns.nix>

## services.cjdns.ETHInterface.connectTo.<name>.publicKey

Public key at the opposite end of the tunnel. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/cjdns.nix>
