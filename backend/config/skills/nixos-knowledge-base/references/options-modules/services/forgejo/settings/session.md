---
module: services.forgejo.settings.session
option_count: 1
source: options.html
---

# services.forgejo.settings.session

## services.forgejo.settings.session.COOKIE_SECURE

Marks session cookies as “secure” as a hint for browsers to only send them via HTTPS. This option is recommend, if Forgejo is being served over HTTPS. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/forgejo.nix>
