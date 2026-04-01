---
module: services.rspamd.overrides.<name>
option_count: 3
source: options.html
---

# services.rspamd.overrides.<name>

## services.rspamd.overrides.<name>.enable

Whether this file overrides should be generated. This option allows specific overrides files to be disabled. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.overrides.<name>.source

Path of the source file. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>

## services.rspamd.overrides.<name>.text

Text of the file. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/mail/rspamd.nix>
