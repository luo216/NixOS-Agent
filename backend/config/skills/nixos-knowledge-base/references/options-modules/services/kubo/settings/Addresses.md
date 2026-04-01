---
module: services.kubo.settings.Addresses
option_count: 3
source: options.html
---

# services.kubo.settings.Addresses

## services.kubo.settings.Addresses.API

Multiaddr or array of multiaddrs describing the address to serve the local HTTP API on. In addition to the multiaddrs listed here, the daemon will also listen on a Unix domain socket. To allow the ipfs CLI tools to communicate with the daemon over that socket, add your user to the correct group, e.g. users.users.alice.extraGroups = [ config.services.kubo.group ]; Type: string or list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.settings.Addresses.Gateway

Where the IPFS Gateway can be reached Type: string or list of string Default: "/ip4/127.0.0.1/tcp/8080" Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>

## services.kubo.settings.Addresses.Swarm

Where Kubo listens for incoming p2p connections Type: list of string Default: [ "/ip4/0.0.0.0/tcp/4001" "/ip6/::/tcp/4001" "/ip4/0.0.0.0/udp/4001/quic-v1" "/ip4/0.0.0.0/udp/4001/quic-v1/webtransport" "/ip4/0.0.0.0/udp/4001/webrtc-direct" "/ip6/::/udp/4001/quic-v1" "/ip6/::/udp/4001/quic-v1/webtransport" "/ip6/::/udp/4001/webrtc-direct" ] Declared by: <nixpkgs/nixos/modules/services/network-filesystems/kubo.nix>
