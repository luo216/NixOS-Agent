---
module: services.discourse.nginx
option_count: 1
source: options.html
---

# services.discourse.nginx

## services.discourse.nginx.enable

Whether an nginx virtual host should be set up to serve Discourse. Only disable if you’re planning to use a different web server, which is not recommended. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>
