---
module: services.kimai
option_count: 2
source: options.html
---

# services.kimai

## services.kimai.sites

Specification of one or more Kimai sites to serve Type: attribute set of (submodule) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>

## services.kimai.webserver

The webserver to configure for the PHP frontend. At the moment, only nginx is supported. PRs are welcome for support for other web servers. Type: value “nginx” (singular enum) Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/web-apps/kimai.nix>
