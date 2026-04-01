---
module: services.nitter.server
option_count: 7
source: options.html
---

# services.nitter.server

## services.nitter.server.address

The address to listen on. Type: string Default: "0.0.0.0" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.server.hostname

Hostname of the instance. Type: string Default: "localhost" Example: "nitter.net" Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.server.httpMaxConnections

Maximum number of HTTP connections. Type: signed integer Default: 100 Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.server.https

Set secure attribute on cookies. Keep it disabled to enable cookies when not using HTTPS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.server.port

The port to listen on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 8000 Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.server.staticDir

Path to the static files directory. Type: absolute path Default: "${config.services.nitter.package}/share/nitter/public" Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>

## services.nitter.server.title

Title of the instance. Type: string Default: "nitter" Declared by: <nixpkgs/nixos/modules/services/misc/nitter.nix>
