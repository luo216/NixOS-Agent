---
module: services.coredns
option_count: 4
source: options.html
---

# services.coredns

## services.coredns.enable

Whether to enable Coredns dns server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/coredns.nix>

## services.coredns.package

The coredns package to use. Type: package Default: pkgs.coredns Declared by: <nixpkgs/nixos/modules/services/networking/coredns.nix>

## services.coredns.config

Verbatim Corefile to use. See https://coredns.io/manual/toc/#configuration for details. Type: strings concatenated with “\n” Default: "" Example: '' . { whoami } '' Declared by: <nixpkgs/nixos/modules/services/networking/coredns.nix>

## services.coredns.extraArgs

Extra arguments to pass to coredns. Type: list of string Default: [ ] Example: [ "-dns.port=53" ] Declared by: <nixpkgs/nixos/modules/services/networking/coredns.nix>
