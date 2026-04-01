---
module: services.zeronsd.servedNetworks.<name>.settings
option_count: 4
source: options.html
---

# services.zeronsd.servedNetworks.<name>.settings

## services.zeronsd.servedNetworks.<name>.settings.domain

Domain under which ZeroTier records will be available. Type: (optionally newline-terminated) single-line string Default: "home.arpa" Declared by: <nixpkgs/nixos/modules/services/networking/zeronsd.nix>

## services.zeronsd.servedNetworks.<name>.settings.log_level

Log Level. Type: one of “off”, “error”, “warn”, “info”, “debug”, “trace” Default: "warn" Declared by: <nixpkgs/nixos/modules/services/networking/zeronsd.nix>

## services.zeronsd.servedNetworks.<name>.settings.token

Path to a file containing the API Token for ZeroTier Central. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/networking/zeronsd.nix>

## services.zeronsd.servedNetworks.<name>.settings.wildcard

Whether to serve a wildcard record for ZeroTier Nodes. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/zeronsd.nix>
