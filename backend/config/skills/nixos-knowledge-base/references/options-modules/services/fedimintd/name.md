---
module: services.fedimintd.<name>
option_count: 4
source: options.html
---

# services.fedimintd.<name>

## services.fedimintd.<name>.enable

Whether to enable fedimintd. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.package

The fedimint package to use. Type: package Default: pkgs.fedimint Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.dataDir

Path to the data dir fedimintd will use to store its data. Note that due to using the DynamicUser feature of systemd, this value should not be changed and is set to be read only. Type: absolute path (read only) Default: "/var/lib/fedimintd-‹name›/" Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>

## services.fedimintd.<name>.environment

Extra Environment variables to pass to the fedimintd. Type: attribute set of string Default: { RUST_BACKTRACE = "1"; } Example: { RUST_BACKTRACE = "1"; RUST_LOG = "info,fm=debug"; } Declared by: <nixpkgs/nixos/modules/services/networking/fedimintd.nix>
