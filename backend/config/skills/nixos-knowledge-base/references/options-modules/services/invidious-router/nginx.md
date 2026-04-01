---
module: services.invidious-router.nginx
option_count: 3
source: options.html
---

# services.invidious-router.nginx

## services.invidious-router.nginx.enable

Whether to enable Automatic nginx proxy configuration . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/invidious-router.nix>

## services.invidious-router.nginx.domain

The domain on which invidious-router should be served. Type: string Example: "invidious-router.example.com" Declared by: <nixpkgs/nixos/modules/services/misc/invidious-router.nix>

## services.invidious-router.nginx.extraDomains

Additional domains to serve invidious-router on. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/misc/invidious-router.nix>
