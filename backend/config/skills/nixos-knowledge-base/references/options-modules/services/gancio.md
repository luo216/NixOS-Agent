---
module: services.gancio
option_count: 7
source: options.html
---

# services.gancio

## services.gancio.enable

Whether to enable Gancio, a shared agenda for local communities. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.package

The gancio package to use. Type: package Default: pkgs.gancio Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.nginx

Extra configuration for the nginx virtual host of gancio. Type: submodule Default: { } Example: { enableACME = false; forceSSL = false; } Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.plugins

Paths of gancio plugins to activate (linked under $WorkingDirectory/plugins/). Type: list of package Default: [ ] Example: [ pkgs.gancioPlugins.telegram-bridge ] Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.settings

Configuration for Gancio, see https://gancio.org/install/config for supported values. Type: open submodule of (JSON value) Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.user

The user (and PostgreSQL database name) used to run the gancio server Type: string Default: "gancio" Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>

## services.gancio.userLocale

Override default locales within gancio. See default languages and locales. Type: attribute set of attribute set of attribute set of string Default: { } Example: { en = { register = { description = "My new registration page description"; }; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/gancio.nix>
