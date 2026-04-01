---
module: services.inadyn
option_count: 7
source: options.html
---

# services.inadyn

## services.inadyn.enable

Whether to enable synchronise your machine’s IP address with a dynamic DNS provider using inadyn . Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.configFile

Configuration file for inadyn. Setting this will override all other configuration options. Passed to the inadyn service using LoadCredential. Type: null or absolute path Default: null Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.group

Group account under which inadyn runs. Note If left as the default value this user will automatically be created on system activation, otherwise you are responsible for ensuring the user exists before the inadyn service starts. Type: string Default: "inadyn" Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.interval

How often to check the current IP. Uses the format described in systemd.time(7)"; Type: string Default: "*-*-* *:*:00" Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.logLevel

Set inadyn’s log level. Type: one of “none”, “err”, “warning”, “info”, “notice”, “debug” Default: "notice" Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.settings

See inadyn.conf (5) Type: open submodule of (attribute set) Default: { } Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>

## services.inadyn.user

User account under which inadyn runs. Note If left as the default value this user will automatically be created on system activation, otherwise you are responsible for ensuring the user exists before the inadyn service starts. Type: string Default: "inadyn" Declared by: <nixpkgs/nixos/modules/services/networking/inadyn.nix>
