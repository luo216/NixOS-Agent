---
module: services.pretalx.settings.site
option_count: 1
source: options.html
---

# services.pretalx.settings.site

## services.pretalx.settings.site.url

The base URI below which your pretalx instance will be reachable. Type: string Default: https://${config.services.pretalx.nginx.domain} Example: "https://talks.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretalx.nix>
