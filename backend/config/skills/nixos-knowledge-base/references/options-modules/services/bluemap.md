---
module: services.bluemap
option_count: 14
source: options.html
---

# services.bluemap

## services.bluemap.enable

Whether to enable bluemap. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.enableNginx

Enable configuring a virtualHost for serving the bluemap webapp Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.enableRender

Enable rendering Type: boolean Default: true Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.coreSettings

Settings for the core.conf file, see upstream docs. Type: open submodule of (HOCON value) Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.defaultWorld

The world used by the default map ruleset. If you configure your own maps you do not need to set this. Type: absolute path Example: ${config.services.minecraft.dataDir}/world Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.eula

By changing this option to true you confirm that you own a copy of minecraft Java Edition, and that you agree to minecrafts EULA. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.host

Domain on which nginx will serve the bluemap webapp Type: string Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.maps

Settings for files in maps/. If you define anything here you must define everything yourself. See the default for an example with good options for the different world types. For valid values consult upstream docs. Type: attribute set of (open submodule of (HOCON value)) Default: { "overworld" = { world = "${cfg.defaultWorld}"; ambient-light = 0.1; cave-detection-ocean-floor = -5; }; "nether" = { world = "${cfg.defaultWorld}/DIM-1"; sorting = 100; sky-color = "#290000"; void-color = "#150000"; ambient-light = 0.6; world-sky-light = 0; remove-caves-below-y = -10000; cave-detection-ocean-floor = -5; cave-detection-uses-block-light = true; max-y = 90; }; "end" = { world = "${cfg.defaultWorld}/DIM1"; sorting = 200; sky-color = "#080010"; void-color = "#080010"; ambient-light = 0.6; world-sky-light = 0; remove-caves-below-y = -10000; cave-detection-ocean-floor = -5; }; }; Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.onCalendar

How often to trigger rendering the map, in the format of a systemd timer onCalendar configuration. See systemd.timer(5). Type: string Default: "*-*-* 03:10:00" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.packs

A set of resourcepacks, datapacks, and mods to extract resources from, loaded in alphabetical order. Type: attribute set of path in the Nix store Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.storage

Where the rendered map will be stored. Unless you are doing something advanced you should probably leave this alone and configure webRoot instead. See upstream docs Type: attribute set of (open submodule of (HOCON value)) Default: { "file" = { root = "${config.services.bluemap.webRoot}/maps"; }; } Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.webRoot

The directory for saving and serving the webapp and the maps Type: absolute path Default: "/var/lib/bluemap/web" Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.webappSettings

Settings for the webapp.conf file, see upstream docs. Type: open submodule of (HOCON value) Default: { enabled = true; webroot = config.services.bluemap.webRoot; } Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>

## services.bluemap.webserverSettings

Settings for the webserver.conf file, usually not required. See upstream docs. Type: open submodule of (HOCON value) Default: { } Declared by: <nixpkgs/nixos/modules/services/web-apps/bluemap.nix>
