---
module: services.pulseaudio.tcp.anonymousClients
option_count: 2
source: options.html
---

# services.pulseaudio.tcp.anonymousClients

## services.pulseaudio.tcp.anonymousClients.allowAll

Whether to enable all anonymous clients to stream to the server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/pulseaudio.nix>

## services.pulseaudio.tcp.anonymousClients.allowedIpRanges

A list of IP subnets that are allowed to stream to the server. Type: list of string Default: [ ] Example: [ "127.0.0.1" "192.168.1.0/24" ] Declared by: <nixpkgs/nixos/modules/services/audio/pulseaudio.nix>
