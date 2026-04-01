---
module: services.nginx.gitweb
option_count: 5
source: options.html
---

# services.nginx.gitweb

## services.nginx.gitweb.enable

If true, enable gitweb in nginx. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/gitweb.nix>

## services.nginx.gitweb.group

Group that the CGI process will belong to. (Set to config.services.gitolite.group if you are using gitolite.) Type: string Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/gitweb.nix>

## services.nginx.gitweb.location

Location to serve gitweb on. Type: string Default: "/gitweb" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/gitweb.nix>

## services.nginx.gitweb.user

Existing user that the CGI process will belong to. (Default almost surely will do.) Type: string Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/gitweb.nix>

## services.nginx.gitweb.virtualHost

VirtualHost to serve gitweb on. Default is catch-all. Type: string Default: "_" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/gitweb.nix>
