---
module: services.ympd
option_count: 2
source: options.html
---

# services.ympd

## services.ympd.enable

Whether to enable ympd, the MPD Web GUI. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/audio/ympd.nix>

## services.ympd.webPort

The port where ympd’s web interface will be available. Type: string or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: "8080" Example: "ssl://8080:/path/to/ssl-private-key.pem" Declared by: <nixpkgs/nixos/modules/services/audio/ympd.nix>
