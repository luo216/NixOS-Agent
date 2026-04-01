---
module: services.rspamd.postfix
option_count: 2
source: options.html
---

# services.rspamd.postfix

## services.rspamd.postfix.enable

Add rspamd milter to postfix main.conf Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.postfix.config

Addon to postfix configuration Type: attribute set of (boolean or string or list of string) Default: { non_smtpd_milters = [ "unix:/run/rspamd/rspamd-milter.sock" ]; smtpd_milters = [ "unix:/run/rspamd/rspamd-milter.sock" ]; } Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>
