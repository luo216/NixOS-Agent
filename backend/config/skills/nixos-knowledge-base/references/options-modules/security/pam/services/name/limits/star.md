---
module: security.pam.services.<name>.limits.*
option_count: 4
source: options.html
---

# security.pam.services.<name>.limits.*

## security.pam.services.<name>.limits.*.domain

Username, groupname, or wildcard this limit applies to Type: string Example: "@wheel" Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.limits.*.item

Item this limit applies to Type: one of “core”, “data”, “fsize”, “memlock”, “nofile”, “rss”, “stack”, “cpu”, “nproc”, “as”, “maxlogins”, “maxsyslogins”, “priority”, “locks”, “sigpending”, “msgqueue”, “nice”, “rtprio” Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.limits.*.type

Type of this limit Type: one of “-”, “hard”, “soft” Default: "-" Declared by: <nixpkgs/nixos/modules/security/pam.nix>

## security.pam.services.<name>.limits.*.value

Value of this limit Type: string or signed integer Declared by: <nixpkgs/nixos/modules/security/pam.nix>
