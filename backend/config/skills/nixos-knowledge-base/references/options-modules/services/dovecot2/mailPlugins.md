---
module: services.dovecot2.mailPlugins
option_count: 2
source: options.html
---

# services.dovecot2.mailPlugins

## services.dovecot2.mailPlugins.globally

Additional entries to add to the mail_plugins variable for all protocols Type: submodule Default: { enable = [ ]; } Example: { enable = [ "virtual" ]; } Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.mailPlugins.perProtocol

Additional entries to add to the mail_plugins variable, per protocol Type: attribute set of (submodule) Default: { } Example: { imap = [ "imap_acl" ]; } Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>
