---
module: services.chromadb
option_count: 6
source: options.html
---

# services.chromadb

## services.chromadb.enable

Whether to enable ChromaDB, an open-source AI application database… Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/databases/chromadb.nix>

## services.chromadb.package

The chromadb package to use. Type: package Default: pkgs.python3Packages.chromadb Declared by: <nixpkgs/nixos/modules/services/databases/chromadb.nix>

## services.chromadb.dbpath

Location where ChromaDB stores its files Type: string Default: "/var/lib/chromadb" Declared by: <nixpkgs/nixos/modules/services/databases/chromadb.nix>

## services.chromadb.host

Defines the IP address by which ChromaDB will be accessible. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/databases/chromadb.nix>

## services.chromadb.openFirewall

Whether to automatically open the specified TCP port in the firewall. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/databases/chromadb.nix>

## services.chromadb.port

Defined the port number to listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8000 Declared by: <nixpkgs/nixos/modules/services/databases/chromadb.nix>
