---
module: services.incron
option_count: 5
source: options.html
---

# services.incron

## services.incron.enable

Whether to enable the incron daemon. Note that commands run under incrontab only support common Nix profiles for the PATH provided variable. Type: boolean Default: false Declared by: <nixpkgs/nixos/modules/services/monitoring/incron.nix>

## services.incron.allow

Users allowed to use incrontab. If empty then no user will be allowed to have their own incrontab. If null then will defer to deny. If both allow and deny are null then all users will be allowed to have their own incrontab. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/incron.nix>

## services.incron.deny

Users forbidden from using incrontab. Type: null or (list of string) Default: null Declared by: <nixpkgs/nixos/modules/services/monitoring/incron.nix>

## services.incron.extraPackages

Extra packages available to the system incrontab. Type: list of package Default: [ ] Example: [ pkgs.rsync ] Declared by: <nixpkgs/nixos/modules/services/monitoring/incron.nix>

## services.incron.systab

The system incrontab contents. Type: strings concatenated with “\n” Default: "" Example: '' /var/mail IN_CLOSE_WRITE abc $@/$# /tmp IN_ALL_EVENTS efg $@/$# $& '' Declared by: <nixpkgs/nixos/modules/services/monitoring/incron.nix>
