---
module: services.doh-proxy-rust
option_count: 2
source: options.html
---

# services.doh-proxy-rust

## services.doh-proxy-rust.enable

Whether to enable doh-proxy-rust. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/doh-proxy-rust.nix>

## services.doh-proxy-rust.flags

A list of command-line flags to pass to doh-proxy. For details on the available options, see https://github.com/jedisct1/doh-server#usage. Type: list of string Default: [ ] Example: [ "--server-address=9.9.9.9:53" ] Declared by: <nixpkgs/nixos/modules/services/networking/doh-proxy-rust.nix>
