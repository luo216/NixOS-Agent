---
module: services.rspamd.locals.<name>
option_count: 3
source: options.html
---

# services.rspamd.locals.<name>

## services.rspamd.locals.<name>.enable

Whether this file locals should be generated. This option allows specific locals files to be disabled. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.locals.<name>.source

Path of the source file. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.locals.<name>.text

Text of the file. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>
