---
module: services.discourse.mail.outgoing
option_count: 9
source: options.html
---

# services.discourse.mail.outgoing

## services.discourse.mail.outgoing.enableStartTLSAuto

Whether to try to use StartTLS. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.outgoing.authentication

Authentication type to use, see https://api.rubyonrails.org/classes/ActionMailer/Base.html Type: null or one of “plain”, “login”, “cram_md5” Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.outgoing.domain

HELO domain to use for outgoing mail. Type: string Default: config.services.discourse.hostname Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.outgoing.forceTLS

Force implicit TLS as per RFC 8314 3.3. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.outgoing.opensslVerifyMode

How OpenSSL checks the certificate, see https://api.rubyonrails.org/classes/ActionMailer/Base.html Type: string Default: "peer" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.outgoing.passwordFile

A file containing the password of the SMTP server account. This should be a string, not a nix path, since nix paths are copied into the world-readable nix store. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.outgoing.port

The port of the SMTP server Discourse should use to send email. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25 Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.outgoing.serverAddress

The address of the SMTP server Discourse should use to send email. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>

## services.discourse.mail.outgoing.username

The username of the SMTP server. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/web-apps/discourse.nix>
