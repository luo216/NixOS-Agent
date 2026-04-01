---
module: services.gitea.settings.service
option_count: 1
source: options.html
---

# services.gitea.settings.service

## services.gitea.settings.service.DISABLE_REGISTRATION

By default any user can create an account on this gitea instance. This can be disabled by using this option. Note: please keep in mind that this should be added after the initial deploy as the first registered user will be the administrator. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>
