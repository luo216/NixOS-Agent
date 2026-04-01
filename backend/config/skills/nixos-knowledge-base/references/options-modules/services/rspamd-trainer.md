---
module: services.rspamd-trainer
option_count: 3
source: options.html
---

# services.rspamd-trainer

## services.rspamd-trainer.enable

Whether to enable Spam/ham trainer for rspamd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/rspamd-trainer.nix>

## services.rspamd-trainer.secrets

A list of files containing the various secrets. Should be in the format expected by systemd’s EnvironmentFile directory. For the IMAP account password use PASSWORD = mypassword. Type: list of absolute path Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/rspamd-trainer.nix>

## services.rspamd-trainer.settings

IMAP authentication configuration for rspamd-trainer. For supplying the IMAP password, use the secrets option. Type: open submodule of (TOML value) Default: { } Example: { HOST = "localhost"; USERNAME = "spam@example.com"; INBOXPREFIX = "INBOX/"; } Declared by: <nixpkgs/nixos/modules/services/mail/rspamd-trainer.nix>
