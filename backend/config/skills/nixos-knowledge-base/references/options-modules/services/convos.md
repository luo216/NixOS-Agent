---
module: services.convos
option_count: 4
source: options.html
---

# services.convos

## services.convos.enable

Whether to enable Convos. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/convos.nix>

## services.convos.listenAddress

Address or host the web interface should listen on Type: string Default: "*" Example: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/convos.nix>

## services.convos.listenPort

Port the web interface should listen on Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 3000 Example: 8080 Declared by: <nixpkgs/nixos/modules/services/web-apps/convos.nix>

## services.convos.reverseProxy

Enables reverse proxy support. This will allow Convos to automatically pick up the X-Forwarded-For and X-Request-Base HTTP headers set in your reverse proxy web server. Note that enabling this option without a reverse proxy in front will be a security issue. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/convos.nix>
