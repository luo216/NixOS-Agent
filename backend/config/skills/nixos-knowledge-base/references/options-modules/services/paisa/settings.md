---
module: services.paisa.settings
option_count: 3
source: options.html
---

# services.paisa.settings

## services.paisa.settings.dataDir

Path to paisa data directory. Type: string Default: "/var/lib/paisa/" Declared by: <nixpkgs/nixos/modules/services/misc/paisa.nix>

## services.paisa.settings.dbFile

Filename of the Paisa database. Type: string Default: "paisa.sqlite3" Declared by: <nixpkgs/nixos/modules/services/misc/paisa.nix>

## services.paisa.settings.journalFile

Filename of the main journal / ledger file. Type: string Default: "main.ledger" Declared by: <nixpkgs/nixos/modules/services/misc/paisa.nix>
