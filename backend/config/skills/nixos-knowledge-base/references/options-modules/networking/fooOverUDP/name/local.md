---
module: networking.fooOverUDP.<name>.local
option_count: 2
source: options.html
---

# networking.fooOverUDP.<name>.local

## networking.fooOverUDP.<name>.local.address

Local address to bind to. The address must be available when the FOU endpoint is created, using the scripted network setup this can be achieved either by setting dev or adding dependency information to systemd.services.<name>-fou-encap; it isn’t supported when using networkd. Type: string Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>

## networking.fooOverUDP.<name>.local.dev

Network device to bind to. Type: null or string Default: null Example: "eth0" Declared by: <nixpkgs/nixos/modules/tasks/network-interfaces.nix>
