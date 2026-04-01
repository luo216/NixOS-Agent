---
module: services.autobrr
option_count: 5
source: options.html
---

# services.autobrr

## services.autobrr.enable

Whether to enable Autobrr. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/autobrr.nix>

## services.autobrr.package

The autobrr package to use. Type: package Default: pkgs.autobrr Declared by: <nixpkgs/nixos/modules/services/misc/autobrr.nix>

## services.autobrr.openFirewall

Open ports in the firewall for the Autobrr web interface. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/autobrr.nix>

## services.autobrr.secretFile

File containing the session secret for the Autobrr web interface. Type: absolute path Declared by: <nixpkgs/nixos/modules/services/misc/autobrr.nix>

## services.autobrr.settings

Autobrr configuration options. Refer to https://autobrr.com/configuration/autobrr for a full list. Type: open submodule of (TOML value) Default: { checkForUpdates = true; host = "127.0.0.1"; port = 7474; } Example: { logLevel = "DEBUG"; } Declared by: <nixpkgs/nixos/modules/services/misc/autobrr.nix>
