---
module: services.headscale.settings.dns
option_count: 3
source: options.html
---

# services.headscale.settings.dns

## services.headscale.settings.dns.base_domain

Defines the base domain to create the hostnames for MagicDNS. This domain must be different from the server_url domain. base_domain must be a FQDN, without the trailing dot. The FQDN of the hosts will be hostname.base_domain (e.g. myhost.tailnet.example.com). Type: string Default: "" Example: "tailnet.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.dns.magic_dns

Whether to use MagicDNS. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.dns.search_domains

Search domains to inject to Tailscale clients. Type: list of string Default: [ ] Example: [ "mydomain.internal" ] Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>
