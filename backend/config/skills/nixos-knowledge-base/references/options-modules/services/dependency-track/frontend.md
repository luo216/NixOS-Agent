---
module: services.dependency-track.frontend
option_count: 1
source: options.html
---

# services.dependency-track.frontend

## services.dependency-track.frontend.baseUrl

The base URL of the API server. NOTE: This URL must be reachable by the browsers of your users. The frontend container itself does NOT communicate with the API server directly, it just serves static files. When deploying to dedicated servers, please use the external IP or domain of the API server. Type: string Default: lib.optionalString config.services.dependency-track.nginx.enable "${ if sslEnabled then "https" else "http" }://${config.services.dependency-track.nginx.domain}"; Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>
