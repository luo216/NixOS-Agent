---
module: services.oauth2-proxy.cookie
option_count: 7
source: options.html
---

# services.oauth2-proxy.cookie

## services.oauth2-proxy.cookie.domain

Optional cookie domains to force cookies to (ie: .yourcompany.com). The longest domain matching the request’s host will be used (or the shortest cookie domain if there is no match). Type: null or string Default: null Example: ".yourcompany.com" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.cookie.expire

Expire timeframe for cookie. Type: string Default: "168h0m0s" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.cookie.httpOnly

Set HttpOnly cookie flag. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.cookie.name

The name of the cookie that the oauth_proxy creates. Type: string Default: "_oauth2_proxy" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.cookie.refresh

Refresh the cookie after this duration; 0 to disable. Type: null or string Default: null Example: "168h0m0s" Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.cookie.secret

The seed string for secure cookies. Type: null or string Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.cookie.secure

Set secure (HTTPS) cookie flag. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>
