---
module: services.anuko-time-tracker
option_count: 7
source: options.html
---

# services.anuko-time-tracker

## services.anuko-time-tracker.enable

Whether to enable Anuko Time Tracker. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.package

The anuko-time-tracker package to use. Type: package Default: pkgs.anuko-time-tracker Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.dataDir

Default data folder for Anuko Time Tracker. Type: string Default: "/var/lib/anuko-time-tracker" Example: "/mnt/anuko-time-tracker" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.hostname

The hostname to serve Anuko Time Tracker on. Type: string Default: config.networking.fqdn Example: "anuko.example.com" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.nginx

With this option, you can customize the Nginx virtualHost settings. Type: submodule Default: { } Example: { serverAliases = [ "anuko.${config.networking.domain}" ]; # To enable encryption and let let's encrypt take care of certificate forceSSL = true; enableACME = true; } Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.poolConfig

Options for Anuko Time Tracker’s PHP-FPM pool. Type: attribute set of (string or signed integer or boolean) Default: { pm = "dynamic"; "pm.max_children" = 32; "pm.max_requests" = 500; "pm.max_spare_servers" = 4; "pm.min_spare_servers" = 2; "pm.start_servers" = 2; } Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>

## services.anuko-time-tracker.user

User under which Anuko Time Tracker runs. Type: string Default: "anuko_time_tracker" Declared by: <nixpkgs/nixos/modules/services/web-apps/anuko-time-tracker.nix>
