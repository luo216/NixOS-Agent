---
module: services.mailhog
option_count: 7
source: options.html
---

# services.mailhog

## services.mailhog.enable

Whether to enable MailHog, web and API based SMTP testing. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/mailhog.nix>

## services.mailhog.apiPort

Port on which the API endpoint will listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8025 Declared by: <nixpkgs/nixos/modules/services/mail/mailhog.nix>

## services.mailhog.extraArgs

List of additional arguments to pass to the MailHog process. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/mailhog.nix>

## services.mailhog.setSendmail

Whether to enable set the system sendmail to mailhogs’s. Type: boolean Default: true Example: true Declared by: <nixpkgs/nixos/modules/services/mail/mailhog.nix>

## services.mailhog.smtpPort

Port on which the SMTP endpoint will listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 1025 Declared by: <nixpkgs/nixos/modules/services/mail/mailhog.nix>

## services.mailhog.storage

Store mails on disk or in memory. Type: one of “maildir”, “memory” Default: "memory" Declared by: <nixpkgs/nixos/modules/services/mail/mailhog.nix>

## services.mailhog.uiPort

Port on which the HTTP UI will listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8025 Declared by: <nixpkgs/nixos/modules/services/mail/mailhog.nix>
