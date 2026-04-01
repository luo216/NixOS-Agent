---
module: services.wastebin
option_count: 5
source: options.html
---

# services.wastebin

## services.wastebin.enable

Whether to enable Wastebin, a pastebin service. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>

## services.wastebin.package

The wastebin package to use. Type: package Default: pkgs.wastebin Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>

## services.wastebin.secretFile

Path to file containing sensitive environment variables. Some variables that can be considered secrets are: WASTEBIN_PASSWORD_SALT: salt used to hash user passwords used for encrypting pastes. WASTEBIN_SIGNING_KEY: sets the key to sign cookies. If not set, a random key will be generated which means cookies will become invalid after restarts and paste creators will not be able to delete their pastes anymore. Type: null or absolute path Default: null Example: "/run/secrets/wastebin.env" Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>

## services.wastebin.settings

Additional configuration for wastebin, see https://github.com/matze/wastebin#usage for supported values. For secrets use secretFile option instead. Type: open submodule of attribute set of (boolean or signed integer or string) Default: { } Example: { WASTEBIN_TITLE = "My awesome pastebin"; } Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>

## services.wastebin.stateDir

State directory of the daemon. Type: absolute path Default: "/var/lib/wastebin" Declared by: <nixpkgs/nixos/modules/services/misc/wastebin.nix>
