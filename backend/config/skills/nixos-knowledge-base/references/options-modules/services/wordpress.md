---
module: services.wordpress
option_count: 2
source: options.html
---

# services.wordpress

## services.wordpress.sites

Specification of one or more WordPress sites to serve Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>

## services.wordpress.webserver

Whether to use apache2 or nginx for virtual host management. Further nginx configuration can be done by adapting services.nginx.virtualHosts.<name>. See services.nginx.virtualHosts for further information. Further apache2 configuration can be done by adapting services.httpd.virtualHosts.<name>. See services.httpd.virtualHosts for further information. Type: one of “httpd”, “nginx”, “caddy” Default: "httpd" Declared by: <nixpkgs/nixos/modules/services/web-apps/wordpress.nix>
