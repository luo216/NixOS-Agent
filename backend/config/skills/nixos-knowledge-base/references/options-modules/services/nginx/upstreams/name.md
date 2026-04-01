---
module: services.nginx.upstreams.<name>
option_count: 2
source: options.html
---

# services.nginx.upstreams.<name>

## services.nginx.upstreams.<name>.extraConfig

These lines go to the end of the upstream verbatim. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>

## services.nginx.upstreams.<name>.servers

Defines the address and other parameters of the upstream servers. See the documentation for the available parameters. Type: attribute set of (open submodule of attribute set of (boolean or signed integer or string)) Default: { } Example: see services.nginx.upstreams Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>
