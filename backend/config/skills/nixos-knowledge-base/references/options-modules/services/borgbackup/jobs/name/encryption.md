---
module: services.borgbackup.jobs.<name>.encryption
option_count: 3
source: options.html
---

# services.borgbackup.jobs.<name>.encryption

## services.borgbackup.jobs.<name>.encryption.mode

Encryption mode to use. Setting a mode other than "none" requires you to specify a passCommand or a passphrase. Type: one of “repokey”, “keyfile”, “repokey-blake2”, “keyfile-blake2”, “authenticated”, “authenticated-blake2”, “none” Example: "repokey-blake2" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.encryption.passCommand

A command which prints the passphrase to stdout. Mutually exclusive with passphrase. Type: null or string Default: null Example: "cat /path/to/passphrase_file" Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.encryption.passphrase

The passphrase the backups are encrypted with. Mutually exclusive with passCommand. If you do not want the passphrase to be stored in the world-readable Nix store, use passCommand. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>
