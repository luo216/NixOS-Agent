---
module: services.mastodon.smtp
option_count: 7
source: options.html
---

# services.mastodon.smtp

## services.mastodon.smtp.authenticate

Authenticate with the SMTP server using username and password. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.smtp.createLocally

Configure local Postfix SMTP server for Mastodon. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.smtp.fromAddress

“From” address used when sending Emails to users. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.smtp.host

SMTP host used when sending emails to users. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.smtp.passwordFile

Path to file containing the SMTP password. Type: null or absolute path Default: null Example: "/var/lib/mastodon/secrets/smtp-password" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.smtp.port

SMTP port used when sending emails to users. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25 Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>

## services.mastodon.smtp.user

SMTP login name. Type: null or string Default: null Example: "mastodon@example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/mastodon.nix>
