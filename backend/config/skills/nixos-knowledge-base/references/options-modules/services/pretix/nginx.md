---
module: services.pretix.nginx
option_count: 2
source: options.html
---

# services.pretix.nginx

## services.pretix.nginx.enable

Whether to set up an nginx virtual host. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.nginx.domain

The domain name under which to set up the virtual host. Type: string Example: "talks.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>
