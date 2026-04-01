---
module: services.workout-tracker
option_count: 6
source: options.html
---

# services.workout-tracker

## services.workout-tracker.enable

Whether to enable workout tracking web application for personal use (or family, friends), geared towards running and other GPX-based activities. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/misc/workout-tracker.nix>

## services.workout-tracker.package

The workout-tracker package to use. Type: package Default: pkgs.workout-tracker Declared by: <nixpkgs/nixos/modules/services/misc/workout-tracker.nix>

## services.workout-tracker.address

Web interface address. Type: string Default: "127.0.0.1" Declared by: <nixpkgs/nixos/modules/services/misc/workout-tracker.nix>

## services.workout-tracker.environmentFile

An environment file as defined in systemd.exec(5). Secrets like WT_JWT_ENCRYPTION_KEY may be passed to the service without adding them to the world-readable Nix store. Type: null or absolute path Default: null Example: "/run/keys/workout-tracker.env" Declared by: <nixpkgs/nixos/modules/services/misc/workout-tracker.nix>

## services.workout-tracker.port

Web interface port. Type: 16 bit unsigned integer; between 0 and 65535 (both inclusive) Default: 8080 Declared by: <nixpkgs/nixos/modules/services/misc/workout-tracker.nix>

## services.workout-tracker.settings

Extra config options. Type: attribute set of string Default: { } Example: { WT_DATABASE_DRIVER = "sqlite"; WT_DEBUG = "false"; WT_DSN = "./database.db"; WT_LOGGING = "true"; } Declared by: <nixpkgs/nixos/modules/services/misc/workout-tracker.nix>
