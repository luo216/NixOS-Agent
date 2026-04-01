---
module: services.foundationdb.tls
option_count: 3
source: options.html
---

# services.foundationdb.tls

## services.foundationdb.tls.allowedPeers

“Peer verification string”. This may be used to adjust which TLS client certificates a server will accept, as a form of user authorization; for example, it may only accept TLS clients who offer a certificate abiding by some locality or organization name. For more information, please see the FoundationDB documentation. Type: string Default: "Check.Valid=1,Check.Unexpired=1" Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.tls.certificate

Path to the TLS certificate file. This certificate will be offered to, and may be verified by, clients. Type: string Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>

## services.foundationdb.tls.key

Private key file for the certificate. Type: string Declared by: <nixpkgs/nixos/modules/services/databases/foundationdb.nix>
