---
module: services.oauth2-proxy.google
option_count: 3
source: options.html
---

# services.oauth2-proxy.google

## services.oauth2-proxy.google.adminEmail

The Google Admin to impersonate for API calls. Only users with access to the Admin APIs can access the Admin SDK Directory API, thus the service account needs to impersonate one of those users to access the Admin SDK Directory API. See https://developers.google.com/admin-sdk/directory/v1/guides/delegation#delegate_domain-wide_authority_to_your_service_account. Type: string Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.google.groups

Restrict logins to members of these Google groups. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>

## services.oauth2-proxy.google.serviceAccountJSON

The path to the service account JSON credentials. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/security/oauth2-proxy.nix>
