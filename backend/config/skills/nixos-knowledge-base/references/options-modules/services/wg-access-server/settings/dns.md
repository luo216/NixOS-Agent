---
module: services.wg-access-server.settings.dns
option_count: 1
source: options.html
---

# services.wg-access-server.settings.dns

## services.wg-access-server.settings.dns.enabled

Enable/disable the embedded DNS proxy server. This is enabled by default and allows VPN clients to avoid DNS leaks by sending all DNS requests to wg-access-server itself. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/networking/wg-access-server.nix>
