---
module: services.smartdns
option_count: 3
source: options.html
---

# services.smartdns

## services.smartdns.enable

Whether to enable SmartDNS DNS server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/smartdns.nix>

## services.smartdns.bindPort

DNS listening port number. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 53 Declared by: <nixpkgs/nixos/modules/services/networking/smartdns.nix>

## services.smartdns.settings

A set that will be generated into configuration file, see the SmartDNS README for details of configuration parameters. You could override the options here like services.smartdns.bindPort by writing settings.bind = ":5353 -no-rule -group example";. Type: attribute set of ((list of (string or signed integer or boolean)) or (string or signed integer or boolean) convertible to it) Example: { bind = ":5353 -no-rule -group example"; cache-size = 4096; server-tls = [ "8.8.8.8:853" "1.1.1.1:853" ]; server-https = "https://cloudflare-dns.com/dns-query -exclude-default-group"; prefetch-domain = true; speed-check-mode = "ping,tcp:80"; }; Declared by: <nixpkgs/nixos/modules/services/networking/smartdns.nix>
