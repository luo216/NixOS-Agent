---
module: services.headscale.settings.oidc
option_count: 7
source: options.html
---

# services.headscale.settings.oidc

## services.headscale.settings.oidc.allowed_domains

Allowed principal domains. if an authenticated user’s domain is not in this list authentication request will be rejected. Type: list of string Default: [ ] Example: [ "example.com" ] Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.oidc.allowed_users

Users allowed to authenticate even if not in allowedDomains. Type: list of string Default: [ ] Example: [ "alice@example.com" ] Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.oidc.client_id

OpenID Connect client ID. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.oidc.client_secret_path

Path to OpenID Connect client secret file. Expands environment variables in format ${VAR}. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.oidc.extra_params

Custom query parameters to send with the Authorize Endpoint request. Type: attribute set of string Default: { } Example: { domain_hint = "example.com"; } Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.oidc.issuer

URL to OpenID issuer. Type: string Default: "" Example: "https://openid.example.com" Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>

## services.headscale.settings.oidc.scope

Scopes used in the OIDC flow. Type: list of string Default: [ "openid" "profile" "email" ] Declared by: <nixpkgs/nixos/modules/services/networking/headscale.nix>
