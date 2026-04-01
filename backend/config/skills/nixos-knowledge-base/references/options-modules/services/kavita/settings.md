---
module: services.kavita.settings
option_count: 2
source: options.html
---

# services.kavita.settings

## services.kavita.settings.IpAddresses

IP Addresses to bind to. The default is to bind to all IPv4 and IPv6 addresses. Type: strings concatenated with “,” Default: "0.0.0.0,::" Declared by: <nixpkgs/nixos/modules/services/web-apps/kavita.nix>

## services.kavita.settings.Port

Port to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5000 Declared by: <nixpkgs/nixos/modules/services/web-apps/kavita.nix>
