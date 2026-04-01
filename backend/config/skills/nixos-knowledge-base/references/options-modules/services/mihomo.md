---
module: services.mihomo
option_count: 6
source: options.html
---

# services.mihomo

## services.mihomo.enable

Whether to enable Mihomo, A rule-based proxy in Go. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/mihomo.nix>

## services.mihomo.package

The mihomo package to use. Type: package Default: pkgs.mihomo Declared by: <nixpkgs/nixos/modules/services/networking/mihomo.nix>

## services.mihomo.configFile

Configuration file to use. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/mihomo.nix>

## services.mihomo.extraOpts

Extra command line options to use. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/mihomo.nix>

## services.mihomo.tunMode

Whether to enable necessary permission for Mihomo’s systemd service for TUN mode to function properly. Keep in mind, that you still need to enable TUN mode manually in Mihomo’s configuration . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/mihomo.nix>

## services.mihomo.webui

Local web interface to use. You can also use the following website: metacubexd: https://d.metacubex.one https://metacubex.github.io/metacubexd https://metacubexd.pages.dev yacd: https://yacd.haishan.me clash-dashboard: https://clash.razord.top Type: null or absolute path Default: null Example: pkgs.metacubexd Declared by: <nixpkgs/nixos/modules/services/networking/mihomo.nix>
