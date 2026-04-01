---
module: services.fedimintd.<name>.p2p
option_count: 4
source: options.html
---

# services.fedimintd.<name>.p2p

## services.fedimintd.<name>.p2p.bind

Address to bind on for p2p connections from peers (both TCP and UDP) Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.p2p.openFirewall

Opens port in firewall for fedimintd’s p2p port (both TCP and UDP) Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.p2p.port

Port to bind on for p2p connections from peers (both TCP and UDP) Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8173 Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.p2p.url

Public address for p2p connections from peers (if TCP is used) Type: null or string Example: "fedimint://p2p.myfedimint.com:8173" Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>
