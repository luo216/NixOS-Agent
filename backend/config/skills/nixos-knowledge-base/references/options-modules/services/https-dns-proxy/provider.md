---
module: services.https-dns-proxy.provider
option_count: 3
source: options.html
---

# services.https-dns-proxy.provider

## services.https-dns-proxy.provider.ips

The custom provider IPs Type: list of string Declared by: <nixpkgs/nixos/modules/services/networking/https-dns-proxy.nix>

## services.https-dns-proxy.provider.kind

The upstream provider to use or custom in case you do not trust any of the predefined providers or just want to use your own. The default is quad9 and there are privacy and security trade-offs when using any upstream provider. Please consider that before using any of them. Supported providers: cloudflare, custom, google, opendns, quad9 If you pick the custom provider, you will need to provide the bootstrap IP addresses as well as the resolver https URL. Type: one of “cloudflare”, “custom”, “google”, “opendns”, “quad9” Default: "quad9" Declared by: <nixpkgs/nixos/modules/services/networking/https-dns-proxy.nix>

## services.https-dns-proxy.provider.url

The custom provider URL Type: string Declared by: <nixpkgs/nixos/modules/services/networking/https-dns-proxy.nix>
