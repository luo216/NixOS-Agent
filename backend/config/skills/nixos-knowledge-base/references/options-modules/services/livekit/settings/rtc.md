---
module: services.livekit.settings.rtc
option_count: 3
source: options.html
---

# services.livekit.settings.rtc

## services.livekit.settings.rtc.port_range_end

End of UDP port range for WebRTC Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 51000 Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>

## services.livekit.settings.rtc.port_range_start

Start of UDP port range for WebRTC Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 50000 Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>

## services.livekit.settings.rtc.use_external_ip

When set to true, attempts to discover the host’s public IP via STUN. This is useful for cloud environments such as AWS & Google where hosts have an internal IP that maps to an external one. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/livekit.nix>
