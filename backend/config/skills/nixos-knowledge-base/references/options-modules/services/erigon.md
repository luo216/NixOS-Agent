---
module: services.erigon
option_count: 5
source: options.html
---

# services.erigon

## services.erigon.enable

Whether to enable Ethereum implementation on the efficiency frontier. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/erigon.nix>

## services.erigon.package

The erigon package to use. Type: package Default: pkgs.erigon Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/erigon.nix>

## services.erigon.extraArgs

Additional arguments passed to Erigon Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/erigon.nix>

## services.erigon.secretJwtPath

Path to the secret jwt used for the http api authentication. Type: absolute path Default: "" Example: "config.age.secrets.ERIGON_JWT.path" Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/erigon.nix>

## services.erigon.settings

Configuration for Erigon Refer to https://github.com/ledgerwatch/erigon#usage for details on supported values. Type: TOML value Default: { datadir = "/var/lib/erigon"; chain = "mainnet"; http = true; "http.port" = 8545; "http.api" = ["eth" "debug" "net" "trace" "web3" "erigon"]; ws = true; port = 30303; "authrpc.port" = 8551; "torrent.port" = 42069; "private.api.addr" = "localhost:9090"; "log.console.verbosity" = 3; # info } Example: { "authrpc.port" = 8551; chain = "mainnet"; datadir = "/var/lib/erigon"; http = true; "http.api" = [ "eth" "debug" "net" "trace" "web3" "erigon" ]; "http.port" = 8545; "log.console.verbosity" = 3; port = 30303; "private.api.addr" = "localhost:9090"; "torrent.port" = 42069; ws = true; } Declared by: <nixpkgs/nixos/modules/services/blockchain/ethereum/erigon.nix>
