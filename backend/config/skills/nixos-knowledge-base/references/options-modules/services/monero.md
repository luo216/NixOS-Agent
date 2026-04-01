---
module: services.monero
option_count: 9
source: options.html
---

# services.monero

## services.monero.enable

Whether to enable Monero node daemon. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.banlist

Path to a text file containing IPs to block. Useful to prevent DDoS/deanonymization attacks. https://github.com/monero-project/meta/issues/1124 Type: null or absolute path Default: null Example: builtins.fetchurl { url = "https://raw.githubusercontent.com/rblaine95/monero-banlist/c6eb9413ddc777e7072d822f49923df0b2a94d88/block.txt"; hash = ""; }; Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.dataDir

The directory where Monero stores its data files. Type: string Default: "/var/lib/monero" Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.environmentFile

Path to an EnvironmentFile for the monero service as defined in systemd.exec(5). Secrets may be passed to the service by specifying placeholder variables in the Nix config and setting values in the environment file. Example: # In environment file: MINING_ADDRESS=888tNkZrPN6JsEgekjMnABU4TBzc2Dt29EPAvkRxbANsAnjyPbb3iQ1YBRk1UXcdRsiKc9dhwMVgN5S9cQUiyoogDavup3H # Service config services.monero.mining.address = "$MINING_ADDRESS"; Type: null or absolute path Default: null Example: "/var/lib/monero/monerod.env" Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.exclusiveNodes

List of peer IP addresses to connect to only. If given the other peer options will be ignored. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.extraConfig

Extra lines to be added verbatim to monerod configuration. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.extraNodes

List of additional peer IP addresses to add to the local list. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.priorityNodes

List of peer IP addresses to connect to and attempt to keep the connection open. Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>

## services.monero.prune

Whether to prune the blockchain. https://www.getmonero.org/resources/moneropedia/pruning.html Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/monero.nix>
