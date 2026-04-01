---
module: services.public-inbox.settings.publicinbox
option_count: 5
source: options.html
---

# services.public-inbox.settings.publicinbox

## services.public-inbox.settings.publicinbox.css

The local path name of a CSS file for the PSGI web interface. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.settings.publicinbox.imapserver

IMAP URLs to this public-inbox instance Type: list of string Default: [ ] Example: [ "imap.public-inbox.org" ] Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.settings.publicinbox.nntpserver

NNTP URLs to this public-inbox instance Type: list of string Default: [ ] Example: [ "nntp://news.public-inbox.org" "nntps://news.public-inbox.org" ] Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.settings.publicinbox.pop3server

POP3 URLs to this public-inbox instance Type: list of string Default: [ ] Example: [ "pop.public-inbox.org" ] Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.settings.publicinbox.wwwlisting

Controls which lists (if any) are listed for when the root public-inbox URL is accessed over HTTP. Type: one of “all”, “404”, “match=domain” Default: "404" Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>
