---
module: services.swapspace.settings
option_count: 9
source: options.html
---

# services.swapspace.settings

## services.swapspace.settings.buffer_elasticity

Percentage of buffer space considered to be “free” Type: integer between 0 and 100 (both inclusive) Default: 30 Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.settings.cache_elasticity

Percentage of cache space considered to be “free” Type: integer between 0 and 100 (both inclusive) Default: 80 Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.settings.cooldown

Duration (roughly in seconds) of the moratorium on swap allocation that is instated if disk space runs out, or the cooldown time after a new swapfile is successfully allocated before swapspace will consider deallocating swap space again. The default cooldown period is about 10 minutes. Type: unsigned integer, meaning >=0 Default: 600 Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.settings.freetarget

Percentage of free space swapspace should aim for when adding swapspace. This should fall somewhere between lower_freelimit and upper_freelimit. Type: integer between 2 and 99 (both inclusive) Default: 30 Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.settings.lower_freelimit

Lower free-space threshold: if the percentage of free space drops below this number, additional swapspace is allocated Type: integer between 0 and 99 (both inclusive) Default: 20 Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.settings.max_swapsize

Greatest allowed size for individual swapfiles Type: string Default: "2t" Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.settings.min_swapsize

Smallest allowed size for individual swapfiles Type: string Default: "4m" Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.settings.swappath

Location where swapspace may create and delete swapfiles Type: string Default: "/var/lib/swapspace" Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>

## services.swapspace.settings.upper_freelimit

Upper free-space threshold: if the percentage of free space exceeds this number, swapspace will attempt to free up swapspace Type: integer between 0 and 100 (both inclusive) Default: 60 Declared by: <nixpkgs/nixos/modules/services/system/swapspace.nix>
