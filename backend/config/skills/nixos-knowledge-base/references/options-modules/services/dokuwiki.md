---
module: services.dokuwiki
option_count: 2
source: options.html
---

# services.dokuwiki

## services.dokuwiki.sites

Specification of one or more DokuWiki sites to serve Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>

## services.dokuwiki.webserver

Whether to use nginx or caddy for virtual host management. Further nginx configuration can be done by adapting services.nginx.virtualHosts.<name>. See services.nginx.virtualHosts for further information. Further caddy configuration can be done by adapting services.caddy.virtualHosts.<name>. See services.caddy.virtualHosts for further information. Type: one of “nginx”, “caddy” Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-apps/dokuwiki.nix>
