---
module: services.lxd-image-server.nginx
option_count: 2
source: options.html
---

# services.lxd-image-server.nginx

## services.lxd-image-server.nginx.enable

Whether to enable nginx. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/lxd-image-server.nix>

## services.lxd-image-server.nginx.domain

Domain to use for nginx virtual host. Type: string Example: "images.example.org" Declared by: <nixpkgs/nixos/modules/services/networking/lxd-image-server.nix>
