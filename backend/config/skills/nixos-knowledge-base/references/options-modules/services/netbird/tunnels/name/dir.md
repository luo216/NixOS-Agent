---
module: services.netbird.tunnels.<name>.dir
option_count: 3
source: options.html
---

# services.netbird.tunnels.<name>.dir

## services.netbird.tunnels.<name>.dir.baseName

A systemd service name to use (without .service suffix). Type: string Default: "netbird-‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.dir.runtime

A runtime directory used by NetBird client. Type: absolute path Default: "/var/run/netbird-‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>

## services.netbird.tunnels.<name>.dir.state

A state directory used by NetBird client to store config.json, state.json & resolv.conf. Type: absolute path Default: "/var/lib/netbird-‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/netbird.nix>
