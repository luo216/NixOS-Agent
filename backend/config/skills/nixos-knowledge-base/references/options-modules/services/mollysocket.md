---
module: services.mollysocket
option_count: 4
source: options.html
---

# services.mollysocket

## services.mollysocket.enable

Whether to enable MollySocket for getting Signal notifications via UnifiedPush . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/mollysocket.nix>

## services.mollysocket.environmentFile

Environment file (see systemd.exec(5) “EnvironmentFile=” section for the syntax) passed to the service. This option can be used to safely include secrets in the configuration. Type: null or absolute path Default: null Example: "/run/secrets/mollysocket" Declared by: <nixpkgs/nixos/modules/services/misc/mollysocket.nix>

## services.mollysocket.logLevel

Set the RUST_LOG environment variable Type: string Default: "info" Example: "debug" Declared by: <nixpkgs/nixos/modules/services/misc/mollysocket.nix>

## services.mollysocket.settings

Configuration for MollySocket. Available options are listed here. Type: open submodule of (TOML value) Default: { } Declared by: <nixpkgs/nixos/modules/services/misc/mollysocket.nix>
