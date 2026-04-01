---
module: services.jitsi-videobridge.nat
option_count: 3
source: options.html
---

# services.jitsi-videobridge.nat

## services.jitsi-videobridge.nat.harvesterAddresses

Addresses of public STUN services to use to automatically find the public and local addresses of this Jitsi-Videobridge instance without the need for manual configuration. This option is ignored if services.jitsi-videobridge.nat.localAddress and services.jitsi-videobridge.nat.publicAddress are set. Type: list of string Default: [ "stunserver.stunprotocol.org:3478" "stun.framasoft.org:3478" "meet-jit-si-turnrelay.jitsi.net:443" ] Example: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.nat.localAddress

Local address to assume when running behind NAT. Type: null or string Default: null Example: "192.168.1.42" Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>

## services.jitsi-videobridge.nat.publicAddress

Public address to assume when running behind NAT. Type: null or string Default: null Example: "1.2.3.4" Declared by: <nixpkgs/nixos/modules/services/networking/jitsi-videobridge.nix>
