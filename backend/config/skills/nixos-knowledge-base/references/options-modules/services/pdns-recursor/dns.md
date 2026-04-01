---
module: services.pdns-recursor.dns
option_count: 3
source: options.html
---

# services.pdns-recursor.dns

## services.pdns-recursor.dns.address

IP addresses Recursor DNS server will bind to. Type: string or list of string Default: [ "::" "0.0.0.0" ] Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.dns.allowFrom

IP address ranges of clients allowed to make DNS queries. Type: list of string Default: [ "127.0.0.0/8" "10.0.0.0/8" "100.64.0.0/10" "169.254.0.0/16" "192.168.0.0/16" "172.16.0.0/12" "::1/128" "fc00::/7" "fe80::/10" ] Example: [ "0.0.0.0/0" "::/0" ] Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>

## services.pdns-recursor.dns.port

Port number Recursor DNS server will bind to. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 53 Declared by: <nixpkgs/nixos/modules/services/networking/pdns-recursor.nix>
