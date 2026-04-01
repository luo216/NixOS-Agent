---
module: services.public-inbox.inboxes.<name>
option_count: 8
source: options.html
---

# services.public-inbox.inboxes.<name>

## services.public-inbox.inboxes.<name>.address

The email addresses of the public-inbox. Type: list of string Example: "example-discuss@example.org" Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.inboxes.<name>.coderepo

Nicknames of a ‘coderepo’ section associated with the inbox. Type: list of coderepo names Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.inboxes.<name>.description

User-visible description for the repository. Type: string Example: "user/dev discussion of public-inbox itself" Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.inboxes.<name>.inboxdir

The absolute path to the directory which hosts the public-inbox. Type: string Default: "/var/lib/public-inbox/inboxes/‹name›" Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.inboxes.<name>.newsgroup

NNTP group name for the inbox. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.inboxes.<name>.url

URL where this inbox can be accessed over HTTP. Type: non-empty string Example: "https://example.org/lists/example-discuss" Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.inboxes.<name>.watch

Paths for public-inbox-watch(1) to monitor for new mail. Type: list of string Default: [ ] Example: [ "maildir:/path/to/test.example.com.git" ] Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.inboxes.<name>.watchheader

If specified, public-inbox-watch(1) will only process mail containing a matching header. Type: null or string Default: null Example: "List-Id:<test@example.com>" Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>
