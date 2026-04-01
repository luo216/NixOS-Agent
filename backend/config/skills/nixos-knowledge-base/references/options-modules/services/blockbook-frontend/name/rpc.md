---
module: services.blockbook-frontend.<name>.rpc
option_count: 5
source: options.html
---

# services.blockbook-frontend.<name>.rpc

## services.blockbook-frontend.<name>.rpc.password

RPC password for JSON-RPC connections. Warning: this is stored in cleartext in the Nix store!!! Use configFile or passwordFile if needed. Type: string Default: "rpc" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.rpc.passwordFile

File containing password of the RPC user. Note: This options is ignored when configFile is used. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.rpc.port

Port for JSON-RPC connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8030 Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.rpc.url

URL for JSON-RPC connections. Type: string Default: "http://127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>

## services.blockbook-frontend.<name>.rpc.user

Username for JSON-RPC connections. Type: string Default: "rpc" Declared by: <nixpkgs/nixos/modules/services/networking/blockbook-frontend.nix>
