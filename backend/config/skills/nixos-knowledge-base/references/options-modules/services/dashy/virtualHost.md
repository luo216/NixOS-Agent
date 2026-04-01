---
module: services.dashy.virtualHost
option_count: 2
source: options.html
---

# services.dashy.virtualHost

## services.dashy.virtualHost.enableNginx

Whether to enable a virtualhost to serve dashy through nginx. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dashy.nix>

## services.dashy.virtualHost.domain

Domain to use for the virtual host. This can be used to change nginx options like services.nginx.virtualHosts."$\{config.services.dashy.virtualHost.domain}".listen = [ ... ] or services.nginx.virtualHosts."example.com".listen = [ ... ] Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/dashy.nix>
