---
module: services.networking.websockify
option_count: 4
source: options.html
---

# services.networking.websockify

## services.networking.websockify.enable

Whether to enable websockify to forward websocket connections to TCP connections. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/websockify.nix>

## services.networking.websockify.portMap

Ports to map by default. Type: attribute set of 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/websockify.nix>

## services.networking.websockify.sslCert

Path to the SSL certificate. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/websockify.nix>

## services.networking.websockify.sslKey

Path to the SSL key. Type: absolute path Default: config.services.networking.websockify.sslCert Declared by: <nixpkgs/nixos/modules/services/networking/websockify.nix>
