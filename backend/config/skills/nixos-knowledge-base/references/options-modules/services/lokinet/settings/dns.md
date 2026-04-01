---
module: services.lokinet.settings.dns
option_count: 2
source: options.html
---

# services.lokinet.settings.dns

## services.lokinet.settings.dns.bind

Address to bind to for handling DNS requests. Type: string Default: "127.3.2.1" Declared by: <nixpkgs/nixos/modules/services/networking/lokinet.nix>

## services.lokinet.settings.dns.upstream

Upstream resolver(s) to use as fallback for non-loki addresses. Multiple values accepted. Type: list of string Default: [ "9.9.9.10" ] Example: [ "1.1.1.1" "8.8.8.8" ] Declared by: <nixpkgs/nixos/modules/services/networking/lokinet.nix>
