---
module: services.flaresolverr
option_count: 4
source: options.html
---

# services.flaresolverr

## services.flaresolverr.enable

Whether to enable FlareSolverr, a proxy server to bypass Cloudflare protection. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/flaresolverr.nix>

## services.flaresolverr.package

The flaresolverr package to use. Type: package Default: pkgs.flaresolverr Declared by: <nixpkgs/nixos/modules/services/misc/flaresolverr.nix>

## services.flaresolverr.openFirewall

Open the port in the firewall for FlareSolverr. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/flaresolverr.nix>

## services.flaresolverr.port

The port on which FlareSolverr will listen for incoming HTTP traffic. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8191 Declared by: <nixpkgs/nixos/modules/services/misc/flaresolverr.nix>
