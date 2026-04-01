---
module: services.sniproxy
option_count: 4
source: options.html
---

# services.sniproxy

## services.sniproxy.enable

Whether to enable sniproxy server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/sniproxy.nix>

## services.sniproxy.config

sniproxy.conf configuration excluding the daemon username and pid file. Type: strings concatenated with “\n” Default: "" Example: '' error_log { filename /var/log/sniproxy/error.log } access_log { filename /var/log/sniproxy/access.log } listen 443 { proto tls } table { example.com 192.0.2.10 example.net 192.0.2.20 } '' Declared by: <nixpkgs/nixos/modules/services/networking/sniproxy.nix>

## services.sniproxy.group

Group under which sniproxy runs. Type: string Default: "sniproxy" Declared by: <nixpkgs/nixos/modules/services/networking/sniproxy.nix>

## services.sniproxy.user

User account under which sniproxy runs. Type: string Default: "sniproxy" Declared by: <nixpkgs/nixos/modules/services/networking/sniproxy.nix>
