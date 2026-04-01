---
module: services.thelounge
option_count: 6
source: options.html
---

# services.thelounge

## services.thelounge.enable

Whether to enable The Lounge web IRC client. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/thelounge.nix>

## services.thelounge.package

The thelounge package to use. Type: package Default: pkgs.thelounge Declared by: <nixpkgs/nixos/modules/services/networking/thelounge.nix>

## services.thelounge.extraConfig

The Lounge’s config.js contents as attribute set (will be converted to JSON to generate the configuration file). The options defined here will be merged to the default configuration file. Note: In case of duplicate configuration, options from extraConfig have priority. Documentation: https://thelounge.chat/docs/server/configuration Type: attribute set Default: { } Example: { reverseProxy = true; defaults = { name = "Your Network"; host = "localhost"; port = 6697; }; } Declared by: <nixpkgs/nixos/modules/services/networking/thelounge.nix>

## services.thelounge.plugins

The Lounge plugins to install. Plugins can be found in pkgs.theLoungePlugins.plugins and pkgs.theLoungePlugins.themes. Type: list of package Default: [ ] Example: [ pkgs.theLoungePlugins.themes.solarized ] Declared by: <nixpkgs/nixos/modules/services/networking/thelounge.nix>

## services.thelounge.port

TCP port to listen on for http connections. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 9000 Declared by: <nixpkgs/nixos/modules/services/networking/thelounge.nix>

## services.thelounge.public

Make your The Lounge instance public. Setting this to false will require you to configure user accounts by using the (thelounge) command or by adding entries in /var/lib/thelounge/users. You might need to restart The Lounge after making changes to the state directory. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/networking/thelounge.nix>
