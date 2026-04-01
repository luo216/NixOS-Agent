---
module: services.anki-sync-server.users.*
option_count: 3
source: options.html
---

# services.anki-sync-server.users.*

## services.anki-sync-server.users.*.password

Password accepted by anki-sync-server for the associated username. WARNING: This option is not secure. This password will be stored in plaintext and will be visible to all users. See services.anki-sync-server.users.passwordFile for a more secure option. Type: null or string Default: null Declared by: <nixpkgs/nixos/modules/services/misc/anki-sync-server.nix>

## services.anki-sync-server.users.*.passwordFile

File containing the password accepted by anki-sync-server for the associated username. Make sure to make readable only by root. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/misc/anki-sync-server.nix>

## services.anki-sync-server.users.*.username

User name accepted by anki-sync-server. Type: string Declared by: <nixpkgs/nixos/modules/services/misc/anki-sync-server.nix>
