---
module: services.c2fmzq-server
option_count: 6
source: options.html
---

# services.c2fmzq-server

## services.c2fmzq-server.enable

Whether to enable c2fmzq-server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/c2fmzq-server.nix>

## services.c2fmzq-server.package

The c2fmzq package to use. Type: package Default: pkgs.c2fmzq Declared by: <nixpkgs/nixos/modules/services/web-apps/c2fmzq-server.nix>

## services.c2fmzq-server.bindIP

The local address to use. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/c2fmzq-server.nix>

## services.c2fmzq-server.passphraseFile

Path to file containing the database passphrase Type: string Example: "/run/secrets/c2fmzq/pwfile" Declared by: <nixpkgs/nixos/modules/services/web-apps/c2fmzq-server.nix>

## services.c2fmzq-server.port

The local port to use. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/c2fmzq-server.nix>

## services.c2fmzq-server.settings

Configuration for c2FmZQ-server passed as CLI arguments. Run c2FmZQ-server help for supported values. Type: open submodule of attribute set of (null or boolean or signed integer or string) Example: { allow-new-accounts = true; auto-approve-new-accounts = true; enable-webapp = true; encrypt-metadata = true; verbose = 3; } Declared by: <nixpkgs/nixos/modules/services/web-apps/c2fmzq-server.nix>
