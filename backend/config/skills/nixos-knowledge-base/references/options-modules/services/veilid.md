---
module: services.veilid
option_count: 3
source: options.html
---

# services.veilid

## services.veilid.enable

Whether to enable Veilid Headless Node. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/veilid.nix>

## services.veilid.openFirewall

Whether to open firewall on ports 5150/tcp, 5150/udp Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/veilid.nix>

## services.veilid.settings

Build veilid-server.conf with nix expression. Check <link xlink:href=“https://veilid.gitlab.io/developer-book/admin/config.html#configuration-keys”>Configuration Keys</link>. Type: open submodule of (YAML 1.1 value) Declared by: <nixpkgs/nixos/modules/services/networking/veilid.nix>
