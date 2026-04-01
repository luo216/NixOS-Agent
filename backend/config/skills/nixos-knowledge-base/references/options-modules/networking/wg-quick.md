---
module: networking.wg-quick
option_count: 1
source: options.html
---

# networking.wg-quick

## networking.wg-quick.interfaces

Wireguard interfaces. Type: attribute set of (submodule) Default: { } Example: { wg0 = { address = [ "192.168.20.4/24" ]; peers = [ { allowedIPs = [ "192.168.20.1/32" ]; endpoint = "demo.wireguard.io:12913"; publicKey = "xTIBA5rboUvnH4htodjb6e697QjLERt1NAB4mZqp8Dg="; } ]; privateKey = "yAnz5TF+lXXJte14tji3zlMNq+hd2rYUIgJBgB3fBmk="; }; } Declared by: <nixpkgs/nixos/modules/services/networking/wg-quick.nix>
