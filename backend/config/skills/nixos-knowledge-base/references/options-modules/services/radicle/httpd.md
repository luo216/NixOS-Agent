---
module: services.radicle.httpd
option_count: 7
source: options.html
---

# services.radicle.httpd

## services.radicle.httpd.enable

Whether to enable Radicle HTTP gateway to radicle-node. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/radicle.nix>

## services.radicle.httpd.package

The radicle-httpd package to use. Type: package Default: pkgs.radicle-httpd Declared by: <nixpkgs/nixos/modules/services/misc/radicle.nix>

## services.radicle.httpd.aliases

Alias and RID pairs to shorten git clone commands for repositories. Type: attribute set of string Default: { } Example: { heartwood = "rad:z3gqcJUoA1n9HaHKufZs5FCSGazv5"; } Declared by: <nixpkgs/nixos/modules/services/misc/radicle.nix>

## services.radicle.httpd.extraArgs

Extra arguments for radicle-httpd Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/radicle.nix>

## services.radicle.httpd.listenAddress

The IP address on which radicle-httpd listens. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/radicle.nix>

## services.radicle.httpd.listenPort

The port on which radicle-httpd listens. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/misc/radicle.nix>

## services.radicle.httpd.nginx

With this option, you can customize an nginx virtual host which already has sensible defaults for radicle-httpd. Set to {} if you do not need any customization to the virtual host. If enabled, then by default, the serverName is radicle-${config.networking.hostName}.${config.networking.domain}, TLS is active, and certificates are acquired via ACME. If this is set to null (the default), no nginx virtual host will be configured. Type: null or (submodule) Default: null Example: { serverAliases = [ "seed.${config.networking.domain}" ]; enableACME = false; useACMEHost = config.networking.domain; } Declared by: <nixpkgs/nixos/modules/services/misc/radicle.nix>
