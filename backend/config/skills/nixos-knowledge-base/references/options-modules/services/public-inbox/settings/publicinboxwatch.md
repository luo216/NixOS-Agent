---
module: services.public-inbox.settings.publicinboxwatch
option_count: 2
source: options.html
---

# services.public-inbox.settings.publicinboxwatch

## services.public-inbox.settings.publicinboxwatch.spamcheck

If set to spamc, public-inbox-watch(1) will filter spam using SpamAssassin. Type: one of “spamc”, “none” Default: "none" Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.settings.publicinboxwatch.watchspam

If set, mail in this maildir will be trained as spam and deleted from all watched inboxes Type: null or string Default: null Example: "maildir:/path/to/spam" Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>
