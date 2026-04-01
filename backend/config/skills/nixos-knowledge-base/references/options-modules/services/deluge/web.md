---
module: services.deluge.web
option_count: 3
source: options.html
---

# services.deluge.web

## services.deluge.web.enable

Whether to enable Deluge Web daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.web.openFirewall

Open ports in the firewall for deluge web daemon Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>

## services.deluge.web.port

Deluge web UI port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8112 Declared by: <nixpkgs/nixos/modules/services/torrent/deluge.nix>
