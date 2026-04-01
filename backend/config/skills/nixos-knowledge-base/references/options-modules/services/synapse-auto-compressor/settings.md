---
module: services.synapse-auto-compressor.settings
option_count: 3
source: options.html
---

# services.synapse-auto-compressor.settings

## services.synapse-auto-compressor.settings.chunk_size

The number of state groups to work on at once. All of the entries from state_groups_state are requested from the database for state groups that are worked on. Therefore small chunk sizes may be needed on machines with low memory. Note: if the compressor fails to find space savings on the chunk as a whole (which may well happen in rooms with lots of backfill in) then the entire chunk is skipped. Type: signed integer Default: 500 Declared by: <nixpkgs/nixos/modules/services/matrix/synapse-auto-compressor.nix>

## services.synapse-auto-compressor.settings.chunks_to_compress

chunks_to_compress chunks of size chunk_size will be compressed. The higher this number is set to, the longer the compressor will run for. Type: signed integer Default: 100 Declared by: <nixpkgs/nixos/modules/services/matrix/synapse-auto-compressor.nix>

## services.synapse-auto-compressor.settings.levels

Sizes of each new level in the compression algorithm, as a comma-separated list. The first entry in the list is for the lowest, most granular level, with each subsequent entry being for the next highest level. The number of entries in the list determines the number of levels that will be used. The sum of the sizes of the levels affects the performance of fetching the state from the database, as the sum of the sizes is the upper bound on the number of iterations needed to fetch a given set of state. Type: list of signed integer Default: [ 100 50 25 ] Declared by: <nixpkgs/nixos/modules/services/matrix/synapse-auto-compressor.nix>
