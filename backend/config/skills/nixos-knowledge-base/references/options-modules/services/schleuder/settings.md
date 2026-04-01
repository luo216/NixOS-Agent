---
module: services.schleuder.settings
option_count: 1
source: options.html
---

# services.schleuder.settings

## services.schleuder.settings.keyserver

Key server from which to fetch and update keys. Note that NixOS uses a different default from upstream, since the upstream default sks-keyservers.net is deprecated. Type: string Default: "keys.openpgp.org" Declared by: <nixpkgs/nixos/modules/services/mail/schleuder.nix>
