---
module: services.dovecot2.imapsieve.mailbox.*
option_count: 5
source: options.html
---

# services.dovecot2.imapsieve.mailbox.*

## services.dovecot2.imapsieve.mailbox.*.after

When an IMAP event of interest occurs, this sieve script is executed after any user script respectively. This setting each specify the location of a single sieve script. The semantics of this setting is similar to sieve_after: the specified scripts form a sequence together with the user script in which the next script is only executed when an (implicit) keep action is executed. Type: null or absolute path Default: null Example: ./report-spam.sieve Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.imapsieve.mailbox.*.before

When an IMAP event of interest occurs, this sieve script is executed before any user script respectively. This setting each specify the location of a single sieve script. The semantics of this setting is similar to sieve_before: the specified scripts form a sequence together with the user script in which the next script is only executed when an (implicit) keep action is executed. Type: null or absolute path Default: null Example: ./report-spam.sieve Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.imapsieve.mailbox.*.causes

Only execute the administrator Sieve scripts for the mailbox configured with services.dovecot2.imapsieve.mailbox.<name>.name when one of the listed IMAPSIEVE causes apply. This has no effect on the user script, which is always executed no matter the cause. Type: list of (one of “APPEND”, “COPY”, “FLAG”) Default: [ ] Example: [ "COPY" "APPEND" ] Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.imapsieve.mailbox.*.from

Only execute the administrator Sieve scripts for the mailbox configured with services.dovecot2.imapsieve.mailbox.<name>.name when the message originates from the indicated mailbox. This setting supports wildcards with a syntax compatible with the IMAP LIST command, meaning that this setting can apply to multiple or even all (“*”) mailboxes. Type: null or string Default: null Example: "*" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>

## services.dovecot2.imapsieve.mailbox.*.name

This setting configures the name of a mailbox for which administrator scripts are configured. The settings defined hereafter with matching sequence numbers apply to the mailbox named by this setting. This setting supports wildcards with a syntax compatible with the IMAP LIST command, meaning that this setting can apply to multiple or even all (“*”) mailboxes. Type: string Example: "Junk" Declared by: <nixpkgs/nixos/modules/services/mail/dovecot.nix>
