---
module: services.snapraid.scrub
option_count: 3
source: options.html
---

# services.snapraid.scrub

## services.snapraid.scrub.interval

How often to run snapraid scrub. Type: string Default: "Mon *-*-* 02:00:00" Example: "weekly" Declared by: <nixpkgs/nixos/modules/services/backup/snapraid.nix>

## services.snapraid.scrub.olderThan

Number of days since data was last scrubbed before it can be scrubbed again. Type: signed integer Default: 10 Example: 20 Declared by: <nixpkgs/nixos/modules/services/backup/snapraid.nix>

## services.snapraid.scrub.plan

Percent of the array that should be checked by snapraid scrub. Type: signed integer Default: 8 Example: 5 Declared by: <nixpkgs/nixos/modules/services/backup/snapraid.nix>
