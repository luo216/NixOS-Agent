---
module: services.listmonk.database.settings
option_count: 2
source: options.html
---

# services.listmonk.database.settings

## services.listmonk.database.settings.messengers

List of messengers, see: https://github.com/knadh/listmonk/blob/master/models/settings.go#L64-L74 for options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>

## services.listmonk.database.settings.smtp

List of outgoing SMTP servers Type: list of (open submodule of attribute set of anything) Declared by: <nixpkgs/nixos/modules/services/mail/listmonk.nix>
