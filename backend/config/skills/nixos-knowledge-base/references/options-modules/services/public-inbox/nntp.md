---
module: services.public-inbox.nntp
option_count: 5
source: options.html
---

# services.public-inbox.nntp

## services.public-inbox.nntp.enable

Whether to enable the public-inbox NNTP server. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.nntp.args

Command-line arguments to pass to public-inbox-nntpd(1). Type: list of string Default: [ ] Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.nntp.cert

Path to TLS certificate to use for connections to public-inbox-nntpd(1). Type: null or string Default: null Example: "/path/to/fullchain.pem" Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.nntp.key

Path to TLS key to use for connections to public-inbox-nntpd(1). Type: null or string Default: null Example: "/path/to/key.pem" Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>

## services.public-inbox.nntp.port

Listening port. Beware that public-inbox uses well-known ports number to decide whether to enable TLS or not. Set to null and use systemd.sockets.public-inbox-nntpd.listenStreams if you need a more advanced listening. Type: null or string or 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 563 Declared by: <nixpkgs/nixos/modules/services/mail/public-inbox.nix>
