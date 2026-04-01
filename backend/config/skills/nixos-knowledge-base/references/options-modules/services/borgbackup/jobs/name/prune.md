---
module: services.borgbackup.jobs.<name>.prune
option_count: 2
source: options.html
---

# services.borgbackup.jobs.<name>.prune

## services.borgbackup.jobs.<name>.prune.keep

Prune a repository by deleting all archives not matching any of the specified retention options. See borg help prune for the available options. Type: attribute set of (signed integer or string matching the pattern [[:digit:]]+[Hdwmy]) Default: { } Example: { within = "1d"; # Keep all archives from the last day daily = 7; weekly = 4; monthly = -1; # Keep at least one archive for each month } Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>

## services.borgbackup.jobs.<name>.prune.prefix

Only consider archive names starting with this prefix for pruning. By default, only archives created by this job are considered. Use "" or null to consider all archives. Type: null or string Default: archiveBaseName Declared by: <nixpkgs/nixos/modules/services/backup/borgbackup.nix>
