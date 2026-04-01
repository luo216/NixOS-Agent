---
module: services.dependency-track.oidc.teams
option_count: 2
source: options.html
---

# services.dependency-track.oidc.teams

## services.dependency-track.oidc.teams.claim

Defines the name of the claim that contains group memberships or role assignments in the provider’s userinfo endpoint. The claim must be an array of strings. Most public identity providers do not support group or role management. When using a customizable / on-demand hosted identity provider, name, content, and inclusion in the userinfo endpoint will most likely need to be configured. Type: string Default: "groups" Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>

## services.dependency-track.oidc.teams.default

Defines one or more team names that auto-provisioned OIDC users shall be added to. Multiple team names may be provided as comma-separated list. Has no effect when services.dependency-track.oidc.userProvisioning=false, or services.dependency-track.oidc.teamSynchronization=true. Type: null or strings concatenated with “,” Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/dependency-track.nix>
