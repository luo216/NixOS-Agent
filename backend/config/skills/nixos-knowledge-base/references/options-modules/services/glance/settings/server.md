---
module: services.glance.settings.server
option_count: 2
source: options.html
---

# services.glance.settings.server

## services.glance.settings.server.host

Glance bind address Type: string Default: "127.0.0.1" Example: "0.0.0.0" Declared by: <nixpkgs/nixos/modules/services/web-apps/glance.nix>

## services.glance.settings.server.port

Glance port to listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Example: 5678 Declared by: <nixpkgs/nixos/modules/services/web-apps/glance.nix>
