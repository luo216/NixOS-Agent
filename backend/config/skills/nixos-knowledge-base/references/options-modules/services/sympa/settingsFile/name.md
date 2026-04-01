---
module: services.sympa.settingsFile.<name>
option_count: 3
source: options.html
---

# services.sympa.settingsFile.<name>

## services.sympa.settingsFile.<name>.enable

Whether this file should be generated. This option allows specific files to be disabled. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.settingsFile.<name>.source

Path of the source file. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>

## services.sympa.settingsFile.<name>.text

Text of the file. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/services/mail/sympa.nix>
