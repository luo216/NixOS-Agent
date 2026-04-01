---
module: services.haproxy
option_count: 5
source: options.html
---

# services.haproxy

## services.haproxy.enable

Whether to enable HAProxy, the reliable, high performance TCP/HTTP load balancer. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/haproxy.nix>

## services.haproxy.package

The haproxy package to use. Type: package Default: pkgs.haproxy Declared by: <nixpkgs/nixos/modules/services/networking/haproxy.nix>

## services.haproxy.config

Contents of the HAProxy configuration file, haproxy.conf. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/networking/haproxy.nix>

## services.haproxy.group

Group account under which haproxy runs. Type: string Default: "haproxy" Declared by: <nixpkgs/nixos/modules/services/networking/haproxy.nix>

## services.haproxy.user

User account under which haproxy runs. Type: string Default: "haproxy" Declared by: <nixpkgs/nixos/modules/services/networking/haproxy.nix>
