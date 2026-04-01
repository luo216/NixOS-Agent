---
module: services.awstats.configs.<name>.webService
option_count: 3
source: options.html
---

# services.awstats.configs.<name>.webService

## services.awstats.configs.<name>.webService.enable

Whether to enable awstats web service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>

## services.awstats.configs.<name>.webService.hostname

The hostname the web service appears under. Type: string Default: "‹name›" Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>

## services.awstats.configs.<name>.webService.urlPrefix

The URL prefix under which the awstats pages appear. Type: string Default: "/awstats" Declared by: <nixpkgs/nixos/modules/services/logging/awstats.nix>
