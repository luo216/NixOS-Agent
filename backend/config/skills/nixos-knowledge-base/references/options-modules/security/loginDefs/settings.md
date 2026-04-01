---
module: security.loginDefs.settings
option_count: 13
source: options.html
---

# security.loginDefs.settings

## security.loginDefs.settings.DEFAULT_HOME

Indicate if login is allowed if we can’t cd to the home directory. Type: one of “yes”, “no” Default: "yes" Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.ENCRYPT_METHOD

This defines the system default encryption algorithm for encrypting passwords. Type: one of “YESCRYPT”, “SHA512”, “SHA256”, “MD5”, “DES” Default: "YESCRYPT" Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.GID_MAX

Range of group IDs used for the creation of regular groups by useradd, groupadd, or newusers. Type: 32 bit unsigned integer; between 0 and 4294967295 (both inclusive) Default: 29999 Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.GID_MIN

Range of group IDs used for the creation of regular groups by useradd, groupadd, or newusers. Type: 32 bit unsigned integer; between 0 and 4294967295 (both inclusive) Default: 1000 Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.SYS_GID_MAX

Range of group IDs used for the creation of system groups by useradd, groupadd, or newusers Type: 32 bit unsigned integer; between 0 and 4294967295 (both inclusive) Default: 999 Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.SYS_GID_MIN

Range of group IDs used for the creation of system groups by useradd, groupadd, or newusers Type: 32 bit unsigned integer; between 0 and 4294967295 (both inclusive) Default: 400 Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.SYS_UID_MAX

Range of user IDs used for the creation of system users by useradd or newusers. Type: 32 bit unsigned integer; between 0 and 4294967295 (both inclusive) Default: 999 Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.SYS_UID_MIN

Range of user IDs used for the creation of system users by useradd or newusers. Type: 32 bit unsigned integer; between 0 and 4294967295 (both inclusive) Default: 400 Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.TTYGROUP

The terminal permissions: the login tty will be owned by the TTYGROUP group, and the permissions will be set to TTYPERM Type: string Default: "tty" Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.TTYPERM

The terminal permissions: the login tty will be owned by the TTYGROUP group, and the permissions will be set to TTYPERM Type: string Default: "0620" Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.UID_MAX

Range of user IDs used for the creation of regular users by useradd or newusers. Type: 32 bit unsigned integer; between 0 and 4294967295 (both inclusive) Default: 29999 Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.UID_MIN

Range of user IDs used for the creation of regular users by useradd or newusers. Type: 32 bit unsigned integer; between 0 and 4294967295 (both inclusive) Default: 1000 Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>

## security.loginDefs.settings.UMASK

The file mode creation mask is initialized to this value. Type: string Default: "077" Declared by: <nixpkgs/nixos/modules/programs/shadow.nix>
