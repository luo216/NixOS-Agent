---
module: services.protonmail-bridge
option_count: 4
source: options.html
---

# services.protonmail-bridge

## services.protonmail-bridge.enable

Whether to enable protonmail bridge. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/protonmail-bridge.nix>

## services.protonmail-bridge.package

The protonmail-bridge package to use. Type: package Default: pkgs.protonmail-bridge Declared by: <nixpkgs/nixos/modules/services/mail/protonmail-bridge.nix>

## services.protonmail-bridge.logLevel

Log level of the Proton Mail Bridge service. If set to null then the service uses it’s default log level. Type: null or one of “panic”, “fatal”, “error”, “warn”, “info”, “debug” Default: null Declared by: <nixpkgs/nixos/modules/services/mail/protonmail-bridge.nix>

## services.protonmail-bridge.path

List of derivations to put in protonmail-bridge’s path. Type: list of absolute path Default: [ ] Example: with pkgs; [ pass gnome-keyring ] Declared by: <nixpkgs/nixos/modules/services/mail/protonmail-bridge.nix>
