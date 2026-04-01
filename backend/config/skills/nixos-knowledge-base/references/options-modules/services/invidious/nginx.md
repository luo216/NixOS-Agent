---
module: services.invidious.nginx
option_count: 1
source: options.html
---

# services.invidious.nginx

## services.invidious.nginx.enable

Whether to configure nginx as a reverse proxy for Invidious. It serves it under the domain specified in services.invidious.settings.domain with enabled TLS and ACME. Further configuration can be done through services.nginx.virtualHosts.${config.services.invidious.settings.domain}.*, which can also be used to disable AMCE and TLS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/invidious.nix>
