---
module: services.gitea.settings.mailer
option_count: 3
source: options.html
---

# services.gitea.settings.mailer

## services.gitea.settings.mailer.ENABLED

Whether to use an email service to send notifications. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.settings.mailer.PROTOCOL

Which mail server protocol to use. Type: one of <null>, “smtp”, “smtps”, “smtp+starttls”, “smtp+unix”, “sendmail”, “dummy” Default: null Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>

## services.gitea.settings.mailer.SENDMAIL_PATH

Path to sendmail binary or script. Type: string Default: if config.services.gitea.settings.mailer.ENABLED && config.services.gitea.settings.mailer.PROTOCOL == "sendmail" then "/run/wrappers/bin/sendmail" else "sendmail" Declared by: <nixpkgs/nixos/modules/services/misc/gitea.nix>
