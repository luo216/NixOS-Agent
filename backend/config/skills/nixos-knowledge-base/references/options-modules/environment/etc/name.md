---
module: environment.etc.<name>
option_count: 9
source: options.html
---

# environment.etc.<name>

## environment.etc.<name>.enable

Whether this /etc file should be generated. This option allows specific /etc files to be disabled. Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>

## environment.etc.<name>.gid

GID of created file. Only takes effect when the file is copied (that is, the mode is not ‘symlink’). Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>

## environment.etc.<name>.group

Group name of file owner. Only takes effect when the file is copied (that is, the mode is not symlink). When services.userborn.enable, this option has no effect. You have to assign a gid instead. Otherwise this option takes precedence over gid. Type: string Default: "+0" Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>

## environment.etc.<name>.mode

If set to something else than symlink, the file is copied instead of symlinked, with the given file mode. Type: string Default: "symlink" Example: "0600" Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>

## environment.etc.<name>.source

Path of the source file. Type: absolute path Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>

## environment.etc.<name>.target

Name of symlink (relative to /etc). Defaults to the attribute name. Type: string Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>

## environment.etc.<name>.text

Text of the file. Type: null or strings concatenated with “\n” Default: null Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>

## environment.etc.<name>.uid

UID of created file. Only takes effect when the file is copied (that is, the mode is not ‘symlink’). Type: signed integer Default: 0 Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>

## environment.etc.<name>.user

User name of file owner. Only takes effect when the file is copied (that is, the mode is not symlink). When services.userborn.enable, this option has no effect. You have to assign a uid instead. Otherwise this option takes precedence over uid. Type: string Default: "+0" Declared by: <nixpkgs/nixos/modules/system/etc/etc.nix>
