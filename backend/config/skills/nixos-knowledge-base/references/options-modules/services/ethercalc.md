---
module: services.ethercalc
option_count: 4
source: options.html
---

# services.ethercalc

## services.ethercalc.enable

ethercalc, an online collaborative spreadsheet server. Persistent state will be maintained under /var/lib/ethercalc. Upstream supports using a redis server for storage and recommends the redis backend for intensive use; however, the Nix module doesn’t currently support redis. Note that while ethercalc is a good and robust project with an active issue tracker, there haven’t been new commits since the end of 2020. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/ethercalc.nix>

## services.ethercalc.package

The ethercalc package to use. Type: package Default: pkgs.ethercalc Declared by: <nixpkgs/nixos/modules/services/web-apps/ethercalc.nix>

## services.ethercalc.host

Address to listen on (use 0.0.0.0 to allow access from any address). Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/ethercalc.nix>

## services.ethercalc.port

Port to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/web-apps/ethercalc.nix>
