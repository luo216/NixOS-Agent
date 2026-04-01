---
module: services.fedimintd.<name>.api_iroh
option_count: 3
source: options.html
---

# services.fedimintd.<name>.api_iroh

## services.fedimintd.<name>.api_iroh.bind

Address to bind on for Iroh endpoint for API connections Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.api_iroh.openFirewall

Opens UDP port in firewall for fedimintd’s API Iroh endpoint Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.api_iroh.port

UDP Port to bind Iroh endpoint for API connections Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8174 Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>
