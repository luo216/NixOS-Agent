---
module: services.glitchtip.settings
option_count: 3
source: options.html
---

# services.glitchtip.settings

## services.glitchtip.settings.ENABLE_ORGANIZATION_CREATION

When false, only superusers will be able to create new organizations after the first. When true, any user can create a new organization. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>

## services.glitchtip.settings.ENABLE_USER_REGISTRATION

When true, any user will be able to register. When false, user self-signup is disabled after the first user is registered. Subsequent users must be created by a superuser on the backend and organization invitations may only be sent to existing users. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>

## services.glitchtip.settings.GLITCHTIP_DOMAIN

The URL under which GlitchTip is externally reachable. Type: string Example: "https://glitchtip.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/glitchtip.nix>
