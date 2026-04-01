---
module: services.goeland
option_count: 4
source: options.html
---

# services.goeland

## services.goeland.enable

Whether to enable goeland, an alternative to rss2email. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/mail/goeland.nix>

## services.goeland.schedule

How often to run goeland, in systemd time format. Type: string Default: "12h" Example: "Mon, 00:00:00" Declared by: <nixpkgs/nixos/modules/services/mail/goeland.nix>

## services.goeland.settings

Configuration of goeland. See the example config file for the available options. Type: TOML value Default: { } Declared by: <nixpkgs/nixos/modules/services/mail/goeland.nix>

## services.goeland.stateDir

The data directory for goeland where the database will reside if using the unseen filter. If left as the default value this directory will automatically be created before the goeland server starts, otherwise you are responsible for ensuring the directory exists with appropriate ownership and permissions. Type: absolute path Default: "/var/lib/goeland" Declared by: <nixpkgs/nixos/modules/services/mail/goeland.nix>
