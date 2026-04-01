---
module: services.pretix.settings.mail
option_count: 3
source: options.html
---

# services.pretix.settings.mail

## services.pretix.settings.mail.from

E-Mail address used in the FROM header of outgoing mails. Type: string Example: "tickets@example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.mail.host

Hostname of the SMTP server use for mail delivery. Type: string Default: "localhost" Example: "mail.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>

## services.pretix.settings.mail.port

Port of the SMTP server to use for mail delivery. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 25 Example: 587 Declared by: <nixpkgs/nixos/modules/services/web-apps/pretix.nix>
