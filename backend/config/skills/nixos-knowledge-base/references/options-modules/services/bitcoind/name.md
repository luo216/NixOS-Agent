---
module: services.bitcoind.<name>
option_count: 13
source: options.html
---

# services.bitcoind.<name>

## services.bitcoind.<name>.enable

Whether to enable Bitcoin daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.package

The bitcoind package to use. Type: package Default: pkgs.bitcoind Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.configFile

The configuration file path to supply bitcoind. Type: null or absolute path Default: null Example: "/var/lib/‹name›/bitcoin.conf" Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.dataDir

The data directory for bitcoind. Type: absolute path Default: "/var/lib/bitcoind-‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.dbCache

Override the default database cache size in MiB. Type: null or integer between 4 and 16384 (both inclusive) Default: null Example: 4000 Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.extraCmdlineOptions

Extra command line options to pass to bitcoind. Run bitcoind --help to list all available options. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.extraConfig

Additional configurations to be appended to bitcoin.conf. Type: strings concatenated with “\n” Default: "" Example: '' par=16 rpcthreads=16 logips=1 '' Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.group

The group as which to run bitcoind. Type: string Default: "bitcoind-‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.pidFile

Location of bitcoind pid file. Type: absolute path Default: "/var/lib/bitcoind-‹name›/bitcoind.pid" Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.port

Override the default port on which to listen for connections. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.prune

Reduce storage requirements by enabling pruning (deleting) of old blocks. This allows the pruneblockchain RPC to be called to delete specific blocks, and enables automatic pruning of old blocks if a target size in MiB is provided. This mode is incompatible with -txindex and -rescan. Warning: Reverting this setting requires re-downloading the entire blockchain. (“disable” = disable pruning blocks, “manual” = allow manual pruning via RPC, >=550 = automatically prune block files to stay under the specified target size in MiB). Type: null or ((unsigned integer, meaning >=0) or (one of “disable”, “manual”) convertible to it) Default: null Example: 10000 Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.testnet

Whether to use the testnet instead of mainnet. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.user

The user as which to run bitcoind. Type: string Default: "bitcoind-‹name›" Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>
