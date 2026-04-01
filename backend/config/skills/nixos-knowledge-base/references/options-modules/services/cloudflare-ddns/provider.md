---
module: services.cloudflare-ddns.provider
option_count: 2
source: options.html
---

# services.cloudflare-ddns.provider

## services.cloudflare-ddns.provider.ipv4

IP detection provider for IPv4. Common values: cloudflare.trace, cloudflare.doh, local, url:URL, none. Use none to disable IPv4 updates. See cloudflare-ddns documentation for all options. Type: string Default: "cloudflare.trace" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>

## services.cloudflare-ddns.provider.ipv6

IP detection provider for IPv6. Common values: cloudflare.trace, cloudflare.doh, local, url:URL, none. Use none to disable IPv6 updates. See cloudflare-ddns documentation for all options. Type: string Default: "cloudflare.trace" Declared by: <nixpkgs/nixos/modules/services/networking/cloudflare-ddns.nix>
