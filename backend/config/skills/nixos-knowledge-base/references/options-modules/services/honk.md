---
module: services.honk
option_count: 9
source: options.html
---

# services.honk

## services.honk.enable

Whether to enable the Honk server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/honk.nix>

## services.honk.package

The honk package to use. Type: package Default: pkgs.honk Declared by: <nixpkgs/nixos/modules/services/web-apps/honk.nix>

## services.honk.extraCSS

An extra CSS file to be loaded by the client. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/honk.nix>

## services.honk.extraJS

An extra JavaScript file to be loaded by the client. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/honk.nix>

## services.honk.host

The host name or IP address the server should listen to. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/honk.nix>

## services.honk.passwordFile

Password for admin account. NOTE: Should be string not a store path, to prevent the password from being world readable Type: absolute path Declared by: <nixpkgs/nixos/modules/services/web-apps/honk.nix>

## services.honk.port

The port the server should listen to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/honk.nix>

## services.honk.servername

The server name. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/honk.nix>

## services.honk.username

The admin account username. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/honk.nix>
