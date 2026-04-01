---
module: services.bitcoind.<name>.rpc.users.<name>
option_count: 2
source: options.html
---

# services.bitcoind.<name>.rpc.users.<name>

## services.bitcoind.<name>.rpc.users.<name>.name

Username for JSON-RPC connections. Type: string Example: "alice" Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.rpc.users.<name>.passwordHMAC

Password HMAC-SHA-256 for JSON-RPC connections. Must be a string of the format <SALT-HEX>$<HMAC-HEX>. Tool (Python script) for HMAC generation is available here: https://github.com/bitcoin/bitcoin/blob/master/share/rpcauth/rpcauth.py Type: string matching the pattern [0-9a-f]+\$[0-9a-f]{64} Example: "f7efda5c189b999524f151318c0c86$d5b51b3beffbc02b724e5d095828e0bc8b2456e9ac8757ae3211a5d9b16a22ae" Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>
