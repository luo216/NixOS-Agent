---
module: services.outline.oidcAuthentication
option_count: 8
source: options.html
---

# services.outline.oidcAuthentication

## services.outline.oidcAuthentication.authUrl

OIDC authentication URL endpoint. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.oidcAuthentication.clientId

Authentication client identifier. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.oidcAuthentication.clientSecretFile

File path containing the authentication secret. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.oidcAuthentication.displayName

Display name for OIDC authentication. Type: string Default: "OpenID" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.oidcAuthentication.scopes

OpenID authentication scopes. Type: list of string Default: [ "openid" "profile" "email" ] Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.oidcAuthentication.tokenUrl

OIDC token URL endpoint. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.oidcAuthentication.userinfoUrl

OIDC userinfo URL endpoint. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>

## services.outline.oidcAuthentication.usernameClaim

Specify which claims to derive user information from. Supports any valid JSON path with the JWT payload Type: string Default: "preferred_username" Declared by: <nixpkgs/nixos/modules/services/web-apps/outline.nix>
