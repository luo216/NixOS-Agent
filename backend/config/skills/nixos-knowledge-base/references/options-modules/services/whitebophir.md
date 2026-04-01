---
module: services.whitebophir
option_count: 4
source: options.html
---

# services.whitebophir

## services.whitebophir.enable

Whether to enable whitebophir, an online collaborative whiteboard server (persistent state will be maintained under /var/lib/whitebophir). Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/whitebophir.nix>

## services.whitebophir.package

The whitebophir package to use. Type: package Default: pkgs.whitebophir Declared by: <nixpkgs/nixos/modules/services/web-apps/whitebophir.nix>

## services.whitebophir.listenAddress

Address to listen on (use 0.0.0.0 to allow access from any address). Type: string Default: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/whitebophir.nix>

## services.whitebophir.port

Port to bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 5001 Declared by: <nixpkgs/nixos/modules/services/web-apps/whitebophir.nix>
