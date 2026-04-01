---
module: services.zoneminder
option_count: 8
source: options.html
---

# services.zoneminder

## services.zoneminder.enable

Whether to enable ZoneMinder. If you intend to run the database locally, you should set config.services.zoneminder.database.createLocally to true. Otherwise, when set to false (the default), you will have to create the database and database user as well as populate the database yourself. Additionally, you will need to run zmupdate.pl yourself when upgrading to a newer version . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>

## services.zoneminder.cameras

Set this to the number of cameras you expect to support. Type: signed integer Default: 1 Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>

## services.zoneminder.extraConfig

Additional configuration added verbatim to the configuration file. Type: strings concatenated with “\n” Default: "" Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>

## services.zoneminder.hostname

The hostname on which to listen. Type: string Default: "localhost" Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>

## services.zoneminder.openFirewall

Open the firewall port(s). Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>

## services.zoneminder.port

The port on which to listen. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8095 Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>

## services.zoneminder.storageDir

ZoneMinder can generate quite a lot of data, so in case you don’t want to use the default /var/lib/zoneminder, you can override the path here. Type: null or string Default: null Example: "/storage/tank" Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>

## services.zoneminder.webserver

The webserver to configure for the PHP frontend. Set it to none if you want to configure it yourself. PRs are welcome for support for other web servers. Type: one of “nginx”, “none” Default: "nginx" Declared by: <nixpkgs/nixos/modules/services/misc/zoneminder.nix>
