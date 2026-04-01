---
module: services.homer.virtualHost
option_count: 1
source: options.html
---

# services.homer.virtualHost

## services.homer.virtualHost.domain

Domain to use for the virtual host. This can be used to change nginx options like services.nginx.virtualHosts."$\{config.services.homer.virtualHost.domain}".listen = [ ... ] or services.nginx.virtualHosts."example.com".listen = [ ... ] Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/homer.nix>
