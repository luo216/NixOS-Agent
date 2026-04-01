---
module: services.tt-rss.email
option_count: 7
source: options.html
---

# services.tt-rss.email

## services.tt-rss.email.digestSubject

Subject line for email digests. Type: string Default: "[tt-rss] New headlines for last 24 hours" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.email.fromAddress

Address for sending outgoing mail. This applies to password reset notifications, digest emails and any other mail. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.email.fromName

Name for sending outgoing mail. This applies to password reset notifications, digest emails and any other mail. Type: string Default: "Tiny Tiny RSS" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.email.login

SMTP authentication login used when sending outgoing mail. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.email.password

SMTP authentication password used when sending outgoing mail. Type: string Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.email.security

Used to select a secure SMTP connection. Allowed values: ssl, tls, or empty. Type: one of “”, “ssl”, “tls” Default: "" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>

## services.tt-rss.email.server

Hostname:port combination to send outgoing mail. Blank - use system MTA. Type: string Default: "" Example: "localhost:25" Declared by: <nixpkgs/nixos/modules/services/web-apps/tt-rss.nix>
