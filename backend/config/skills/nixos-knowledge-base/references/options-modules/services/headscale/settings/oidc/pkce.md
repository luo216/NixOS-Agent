---
module: services.headscale.settings.oidc.pkce
option_count: 2
source: options.html
---

# services.headscale.settings.oidc.pkce

## services.headscale.settings.oidc.pkce.enabled

Enable or disable PKCE (Proof Key for Code Exchange) support. PKCE adds an additional layer of security to the OAuth 2.0 authorization code flow by preventing authorization code interception attacks See https://datatracker.ietf.org/doc/html/rfc7636 Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.oidc.pkce.method

PKCE method to use: plain: Use plain code verifier S256: Use SHA256 hashed code verifier (default, recommended) Type: string Default: "S256" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>
