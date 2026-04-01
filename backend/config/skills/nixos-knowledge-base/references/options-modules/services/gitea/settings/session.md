---
module: services.gitea.settings.session
option_count: 1
source: options.html
---

# services.gitea.settings.session

## services.gitea.settings.session.COOKIE_SECURE

Marks session cookies as “secure” as a hint for browsers to only send them via HTTPS. This option is recommend, if gitea is being served over HTTPS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>
