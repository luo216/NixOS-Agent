---
module: services.nostr-rs-relay
option_count: 5
source: options.html
---

# services.nostr-rs-relay

## services.nostr-rs-relay.enable

Whether to enable nostr-rs-relay. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/nostr-rs-relay.nix>

## services.nostr-rs-relay.package

The nostr-rs-relay package to use. Type: package Default: pkgs.nostr-rs-relay Declared by: <nixpkgs/nixos/modules/services/web-apps/nostr-rs-relay.nix>

## services.nostr-rs-relay.dataDir

Directory for SQLite files. Type: absolute path Default: "/var/lib/nostr-rs-relay" Declared by: <nixpkgs/nixos/modules/services/web-apps/nostr-rs-relay.nix>

## services.nostr-rs-relay.port

Listen on this port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 12849 Declared by: <nixpkgs/nixos/modules/services/web-apps/nostr-rs-relay.nix>

## services.nostr-rs-relay.settings

See https://git.sr.ht/~gheartsfield/nostr-rs-relay/#configuration for documentation. Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/nostr-rs-relay.nix>
