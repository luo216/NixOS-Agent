---
module: services.fedimintd.<name>.ui
option_count: 3
source: options.html
---

# services.fedimintd.<name>.ui

## services.fedimintd.<name>.ui.bind

Address to bind on for UI connections Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.ui.openFirewall

Opens TCP port in firewall for built-in UI Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.ui.port

TCP Port to bind on for UI connections Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8175 Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>
