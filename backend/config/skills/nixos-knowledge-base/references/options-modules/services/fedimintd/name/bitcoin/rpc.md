---
module: services.fedimintd.<name>.bitcoin.rpc
option_count: 3
source: options.html
---

# services.fedimintd.<name>.bitcoin.rpc

## services.fedimintd.<name>.bitcoin.rpc.kind

Kind of a bitcoin node. Type: string Default: "bitcoind" Example: "electrum" Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.bitcoin.rpc.secretFile

If set the URL specified in bitcoin.rpc.url will get the content of this file added as an URL password, so http://user@example.com will turn into http://user:SOMESECRET@example.com. Example: /etc/nix-bitcoin-secrets/bitcoin-rpcpassword-public (for nix-bitcoin default) Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.bitcoin.rpc.url

Bitcoin node (bitcoind/electrum/esplora) address to connect to Type: string Default: "http://127.0.0.1:38332" Example: "signet" Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>
