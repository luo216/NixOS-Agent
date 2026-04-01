---
module: services.bird-lg.proxy.traceroute
option_count: 3
source: options.html
---

# services.bird-lg.proxy.traceroute

## services.bird-lg.proxy.traceroute.binary

Traceroute’s binary path. Type: string Default: "${pkgs.traceroute}/bin/traceroute" Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.proxy.traceroute.flags

Flags for traceroute process Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>

## services.bird-lg.proxy.traceroute.rawOutput

Display traceroute output in raw format. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/bird-lg.nix>
