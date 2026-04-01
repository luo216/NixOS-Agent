---
module: services.bitcoind.<name>.rpc
option_count: 2
source: options.html
---

# services.bitcoind.<name>.rpc

## services.bitcoind.<name>.rpc.port

Override the default port on which to listen for JSON-RPC connections. Type: null or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: null Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>

## services.bitcoind.<name>.rpc.users

RPC user information for JSON-RPC connections. Type: attribute set of (submodule) Default: { } Example: { alice.passwordHMAC = "f7efda5c189b999524f151318c0c86$d5b51b3beffbc02b724e5d095828e0bc8b2456e9ac8757ae3211a5d9b16a22ae"; bob.passwordHMAC = "b2dd077cb54591a2f3139e69a897ac$4e71f08d48b4347cf8eff3815c0e25ae2e9a4340474079f55705f40574f4ec99"; } Declared by: <nixpkgs/nixos/modules/services/networking/bitcoind.nix>
