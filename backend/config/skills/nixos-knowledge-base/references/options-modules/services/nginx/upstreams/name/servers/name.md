---
module: services.nginx.upstreams.<name>.servers.<name>
option_count: 1
source: options.html
---

# services.nginx.upstreams.<name>.servers.<name>

## services.nginx.upstreams.<name>.servers.<name>.backup

Marks the server as a backup server. It will be passed requests when the primary servers are unavailable. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-servers/nginx/default.nix>
