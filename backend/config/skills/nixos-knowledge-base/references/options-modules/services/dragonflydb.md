---
module: services.dragonflydb
option_count: 10
source: options.html
---

# services.dragonflydb

## services.dragonflydb.enable

Whether to enable DragonflyDB. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/dragonflydb.nix>

## services.dragonflydb.bind

The IP interface to bind to. null means “all interfaces”. Type: null or string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/databases/dragonflydb.nix>

## services.dragonflydb.cacheMode

Once this mode is on, Dragonfly will evict items least likely to be stumbled upon in the future but only when it is near maxmemory limit. Type: null or boolean Default: null Declared by: <nixpkgs/nixos/modules/services/databases/dragonflydb.nix>

## services.dragonflydb.dbNum

Maximum number of supported databases for select Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/services/databases/dragonflydb.nix>

## services.dragonflydb.keysOutputLimit

Maximum number of returned keys in keys command. keys is a dangerous command. We truncate its result to avoid blowup in memory when fetching too many keys. Type: unsigned integer, meaning >=0 Default: 8192 Declared by: <nixpkgs/nixos/modules/services/databases/dragonflydb.nix>

## services.dragonflydb.maxMemory

The maximum amount of memory to use for storage (in bytes). null means this will be automatically set. Type: null or (unsigned integer, meaning >=0) Default: null Declared by: <nixpkgs/nixos/modules/services/databases/dragonflydb.nix>

## services.dragonflydb.memcachePort

To enable memcached compatible API on this port. null means disabled. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/databases/dragonflydb.nix>

## services.dragonflydb.port

The TCP port to accept connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 6379 Declared by: <nixpkgs/nixos/modules/services/databases/dragonflydb.nix>

## services.dragonflydb.requirePass

Password for database Type: null or string Default: null Example: "letmein!" Declared by: <nixpkgs/nixos/modules/services/databases/dragonflydb.nix>

## services.dragonflydb.user

The user to run DragonflyDB as Type: string Default: "dragonfly" Declared by: <nixpkgs/nixos/modules/services/databases/dragonflydb.nix>
