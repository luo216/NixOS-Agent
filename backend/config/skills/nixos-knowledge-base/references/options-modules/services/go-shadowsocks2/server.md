---
module: services.go-shadowsocks2.server
option_count: 2
source: options.html
---

# services.go-shadowsocks2.server

## services.go-shadowsocks2.server.enable

Whether to enable go-shadowsocks2 server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/go-shadowsocks2.nix>

## services.go-shadowsocks2.server.listenAddress

Server listen address or URL Type: string Example: "ss://AEAD_CHACHA20_POLY1305:your-password@:8488" Declared by: <nixpkgs/nixos/modules/services/networking/go-shadowsocks2.nix>
