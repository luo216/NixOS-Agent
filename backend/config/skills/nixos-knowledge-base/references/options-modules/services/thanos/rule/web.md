---
module: services.thanos.rule.web
option_count: 3
source: options.html
---

# services.thanos.rule.web

## services.thanos.rule.web.external-prefix

Static prefix for all HTML links and redirect URLs in the UI query web interface. Actual endpoints are still served on / or the web.route-prefix. This allows thanos UI to be served behind a reverse proxy that strips a URL sub-path. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.web.prefix-header

Name of HTTP request header used for dynamic prefixing of UI links and redirects. This option is ignored if the option web.external-prefix is set. Security risk: enable this option only if a reverse proxy in front of thanos is resetting the header. The header X-Forwarded-Prefix can be useful, for example, if Thanos UI is served via Traefik reverse proxy with PathPrefixStrip option enabled, which sends the stripped prefix value in X-Forwarded-Prefix header. This allows thanos UI to be served on a sub-path. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>

## services.thanos.rule.web.route-prefix

Prefix for API and UI endpoints. This allows thanos UI to be served on a sub-path. This option is analogous to --web.route-prefix of Promethus. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/thanos.nix>
