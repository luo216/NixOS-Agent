---
module: services.smartd.notifications.mail
option_count: 4
source: options.html
---

# services.smartd.notifications.mail

## services.smartd.notifications.mail.enable

Whenever to send e-mail notifications. Type: boolean Default: config.services.mail.sendmailSetuidWrapper != null Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>

## services.smartd.notifications.mail.mailer

Sendmail-compatible binary to be used to send the messages. You should probably enable services.postfix or some other MTA for this to work. Type: absolute path Default: "/run/wrappers/bin/sendmail" Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>

## services.smartd.notifications.mail.recipient

Recipient of the notification messages. Type: string Default: "root" Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>

## services.smartd.notifications.mail.sender

Sender of the notification messages. Acts as the value of email in the emails’ From: ... field. Type: string Default: "root" Example: "example@domain.tld" Declared by: <nixpkgs/nixos/modules/services/monitoring/smartd.nix>
