---
module: services.szurubooru.server
option_count: 4
source: options.html
---

# services.szurubooru.server

## services.szurubooru.server.package

The server package to use. Type: package Default: pkgs.szurubooru.server Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.port

Port to expose HTTP service. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 9000 Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.settings

Configuration to write to config.yaml. See https://github.com/rr-/szurubooru/blob/master/server/config.yaml.dist for more information. Type: open submodule of (YAML 1.1 value) Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>

## services.szurubooru.server.threads

Number of waitress threads to start. Type: signed integer Default: 4 Example: 6 Declared by: <nixpkgs/nixos/modules/services/web-apps/szurubooru.nix>
