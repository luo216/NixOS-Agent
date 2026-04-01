---
module: services.oauth2-proxy.nginx
option_count: 3
source: options.html
---

# services.oauth2-proxy.nginx

## services.oauth2-proxy.nginx.domain

The domain under which the oauth2-proxy will be accesible and the path of cookies are set to. This setting must be set to ensure back-redirects are working properly if oauth2-proxy is configured with services.oauth2-proxy.cookie.domain or multiple services.oauth2-proxy.nginx.virtualHosts that are not on the same domain. Type: string Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy-nginx.nix>

## services.oauth2-proxy.nginx.proxy

The address of the reverse proxy endpoint for oauth2-proxy Type: string Default: config.services.oauth2-proxy.httpAddress Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy-nginx.nix>

## services.oauth2-proxy.nginx.virtualHosts

Nginx virtual hosts to put behind the oauth2 proxy. You can exclude specific locations by setting auth_request off; in the locations extraConfig setting. Type: (attribute set of (submodule)) or (list of string) convertible to it Default: { } Example: { "protected.foo.com" = { allowed_emails = [ "boss@foo.com" ]; allowed_groups = [ "admins" ]; }; } Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy-nginx.nix>
