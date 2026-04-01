---
module: services.dependency-track.oidc
option_count: 9
source: options.html
---

# services.dependency-track.oidc

## services.dependency-track.oidc.enable

Whether to enable oidc support. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.oidc.clientId

Defines the client ID for OpenID Connect. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.oidc.flow

Specifies the OpenID Connect flow to use. Values other than “implicit” will result in the Code+PKCE flow to be used. Usage of the implicit flow is strongly discouraged, but may be necessary when the IdP of choice does not support the Code+PKCE flow. See also: https://oauth.net/2/grant-types/implicit/ https://oauth.net/2/pkce/ Type: one of “code”, “implicit” Default: "code" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.oidc.issuer

Defines the issuer URL to be used for OpenID Connect. See alpine.oidc.issuer property of the API server. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.oidc.loginButtonText

Defines the scopes to request for OpenID Connect. See also: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes Type: string Default: "Login with OpenID Connect" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.oidc.scope

Defines the scopes to request for OpenID Connect. See also: https://openid.net/specs/openid-connect-basic-1_0.html#Scopes Type: string Default: "openid profile email" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.oidc.teamSynchronization

This option will ensure that team memberships for OpenID Connect users are dynamic and synchronized with membership of OpenID Connect groups or assigned roles. When a team is mapped to an OpenID Connect group, all local OpenID Connect users will automatically be assigned to the team if they are a member of the group the team is mapped to. If the user is later removed from the OpenID Connect group, they will also be removed from the team. This option provides the ability to dynamically control user permissions via the identity provider. Note that team synchronization is only performed during user provisioning and after successful authentication. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.oidc.userProvisioning

Specifies if mapped OpenID Connect accounts are automatically created upon successful authentication. When a user logs in with a valid access token but an account has not been previously provisioned, an authentication failure will be returned. This allows admins to control specifically which OpenID Connect users can access the system and which users cannot. When this value is set to true, a local OpenID Connect user will be created and mapped to the OpenID Connect account automatically. This automatic provisioning only affects authentication, not authorization. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.oidc.usernameClaim

Defines the name of the claim that contains the username in the provider’s userinfo endpoint. Common claims are “name”, “username”, “preferred_username” or “nickname”. See also: https://openid.net/specs/openid-connect-core-1_0.html#UserInfoResponse Type: string Default: "name" Example: "preferred_username" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>
