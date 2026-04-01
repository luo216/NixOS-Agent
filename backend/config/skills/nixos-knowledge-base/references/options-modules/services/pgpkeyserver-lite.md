---
module: services.pgpkeyserver-lite
option_count: 5
source: options.html
---

# services.pgpkeyserver-lite

## services.pgpkeyserver-lite.enable

Whether to enable pgpkeyserver-lite on a nginx vHost proxying to a gpg keyserver. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/pgpkeyserver-lite.nix>

## services.pgpkeyserver-lite.package

The pgpkeyserver-lite package to use. Type: package Default: pkgs.pgpkeyserver-lite Declared by: <nixpkgs/nixos/modules/services/web-apps/pgpkeyserver-lite.nix>

## services.pgpkeyserver-lite.hkpAddress

Which IP address the sks-keyserver is listening on. Type: string Default: head config.services.sks.hkpAddress Declared by: <nixpkgs/nixos/modules/services/web-apps/pgpkeyserver-lite.nix>

## services.pgpkeyserver-lite.hkpPort

Which port the sks-keyserver is listening on. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: config.services.sks.hkpPort Declared by: <nixpkgs/nixos/modules/services/web-apps/pgpkeyserver-lite.nix>

## services.pgpkeyserver-lite.hostname

Which hostname to set the vHost to that is proxying to sks. Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/pgpkeyserver-lite.nix>
