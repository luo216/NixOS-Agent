---
module: services.beesd
option_count: 1
source: options.html
---

# services.beesd

## services.beesd.filesystems

BTRFS filesystems to run block-level deduplication on. Type: attribute set of (submodule) Default: { } Example: { "-" = { spec = "LABEL=root"; hashTableSizeMB = 2048; verbosity = "crit"; extraOptions = [ "--loadavg-target" "5.0" ]; }; } Declared by: <nixpkgs/nixos/modules/services/misc/bees.nix>
