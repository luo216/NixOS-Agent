---
module: services.broadcast-box.web
option_count: 3
source: options.html
---

# services.broadcast-box.web

## services.broadcast-box.web.host

Host address the HTTP server listens on. By default the server listens on all interfaces. Type: string Default: "" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/video/broadcast-box.nix>

## services.broadcast-box.web.openFirewall

Whether to enable opening the HTTP server port and, if enabled, the HTTPS redirect server port in the firewall. . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/video/broadcast-box.nix>

## services.broadcast-box.web.port

Port the HTTP server listens on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/video/broadcast-box.nix>
