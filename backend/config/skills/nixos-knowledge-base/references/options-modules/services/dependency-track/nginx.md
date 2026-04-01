---
module: services.dependency-track.nginx
option_count: 2
source: options.html
---

# services.dependency-track.nginx

## services.dependency-track.nginx.enable

Whether to set up an nginx virtual host. Type: boolean Default: true Example: false Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.nginx.domain

The domain name under which to set up the virtual host. Type: string Example: "dtrack.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>
