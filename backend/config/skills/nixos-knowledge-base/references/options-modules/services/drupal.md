---
module: services.drupal
option_count: 4
source: options.html
---

# services.drupal

## services.drupal.enable

Whether to enable drupal. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.package

The drupal package to use. Type: package Default: pkgs.drupal Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.sites

Specification of one or more Drupal sites to serve Type: attribute set of (submodule) Default: { localhost = { enable = true; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>

## services.drupal.webserver

Whether to use nginx or caddy for virtual host management. Further nginx configuration can be done by adapting services.nginx.virtualHosts.<name>. See services.nginx.virtualHosts for further information. Further caddy configuration can be done by adapting services.caddy.virtualHosts.<name>. See services.caddy.virtualHosts for further information. Type: one of “nginx”, “caddy” Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-apps/drupal.nix>
