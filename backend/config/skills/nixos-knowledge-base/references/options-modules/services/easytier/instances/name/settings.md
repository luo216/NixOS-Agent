---
module: services.easytier.instances.<name>.settings
option_count: 8
source: options.html
---

# services.easytier.instances.<name>.settings

## services.easytier.instances.<name>.settings.dhcp

Automatically determine the IPv4 address of this peer based on existing peers on network. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.settings.hostname

Hostname shown in peer list and web console. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.settings.instance_name

Identify different instances on same host Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.settings.ipv4

IPv4 cidr address of this peer in the virtual network. If empty, this peer will only forward packets and no TUN device will be created. Type: null or string Default: null Example: "10.144.144.1/24" Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.settings.listeners

Listener addresses to accept connections from other peers. Valid format is: <proto>://<addr>:<port>, where the protocol can be tcp, udp, ring, wg, ws, wss. Type: list of string Default: [ "tcp://0.0.0.0:11010" "udp://0.0.0.0:11010" ] Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.settings.network_name

EasyTier network name. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.settings.network_secret

EasyTier network credential used for verification and encryption. It can also be set in environmentFile. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>

## services.easytier.instances.<name>.settings.peers

Peers to connect initially. Valid format is: <proto>://<addr>:<port>. Type: list of string Default: [ ] Example: [ "tcp://example.com:11010" ] Declared by: <nixpkgs/nixos/modules/services/networking/easytier.nix>
