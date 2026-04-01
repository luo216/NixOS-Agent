---
module: services.dovecot2.mailboxes.<name>
option_count: 4
source: options.html
---

# services.dovecot2.mailboxes.<name>

## services.dovecot2.mailboxes.<name>.auto

Whether to automatically create or create and subscribe to the mailbox or not. Type: one of “no”, “create”, “subscribe” Default: "no" Example: "subscribe" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.mailboxes.<name>.autoexpunge

To automatically remove all email from the mailbox which is older than the specified time. Type: null or string Default: null Example: "60d" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.mailboxes.<name>.name

The name of the mailbox. Type: string matching the pattern [^"]+ (read only) Default: "‹name›" Example: "Spam" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.mailboxes.<name>.specialUse

Null if no special use flag is set. Other than that every use flag mentioned in the RFC is valid. Type: null or one of “All”, “Archive”, “Drafts”, “Flagged”, “Junk”, “Sent”, “Trash” Default: null Example: "Junk" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>
