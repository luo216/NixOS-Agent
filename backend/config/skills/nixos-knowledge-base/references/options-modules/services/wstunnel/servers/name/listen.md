---
module: services.wstunnel.servers.<name>.listen
option_count: 3
source: options.html
---

# services.wstunnel.servers.<name>.listen

## services.wstunnel.servers.<name>.listen.enableHTTPS

Use HTTPS for the tunnel server. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>

## services.wstunnel.servers.<name>.listen.host

The hostname. Type: string Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>

## services.wstunnel.servers.<name>.listen.port

The port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Declared by: <nixpkgs/nixos/modules/services/networking/wstunnel.nix>
