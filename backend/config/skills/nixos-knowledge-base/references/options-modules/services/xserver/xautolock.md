---
module: services.xserver.xautolock
option_count: 10
source: options.html
---

# services.xserver.xautolock

## services.xserver.xautolock.enable

Whether to enable xautolock. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/xautolock.nix>

## services.xserver.xautolock.enableNotifier

Whether to enable the notifier feature of xautolock. This publishes a notification before the autolock. Type: boolean Default: false Example: true Declared by: <nixpkgs/nixos/modules/services/x11/xautolock.nix>

## services.xserver.xautolock.extraOptions

Additional command-line arguments to pass to xautolock. Type: list of string Default: [ ] Example: [ "-detectsleep" ] Declared by: <nixpkgs/nixos/modules/services/x11/xautolock.nix>

## services.xserver.xautolock.killer

The script to use when nothing has happened for as long as killtime Type: null or string Default: null Example: "/run/current-system/systemd/bin/systemctl suspend" Declared by: <nixpkgs/nixos/modules/services/x11/xautolock.nix>

## services.xserver.xautolock.killtime

Minutes xautolock waits until it executes the script specified in killer (Has to be at least 10 minutes) Type: signed integer Default: 20 Declared by: <nixpkgs/nixos/modules/services/x11/xautolock.nix>

## services.xserver.xautolock.locker

The script to use when automatically locking the computer. Type: string Default: "${pkgs.xlockmore}/bin/xlock" Example: "${pkgs.i3lock}/bin/i3lock -i /path/to/img" Declared by: <nixpkgs/nixos/modules/services/x11/xautolock.nix>

## services.xserver.xautolock.notifier

Notification script to be used to warn about the pending autolock. Type: null or string Default: null Example: "${pkgs.libnotify}/bin/notify-send 'Locking in 10 seconds'" Declared by: <nixpkgs/nixos/modules/services/x11/xautolock.nix>

## services.xserver.xautolock.notify

Time (in seconds) before the actual lock when the notification about the pending lock should be published. Type: signed integer Default: 10 Declared by: <nixpkgs/nixos/modules/services/x11/xautolock.nix>

## services.xserver.xautolock.nowlocker

The script to use when manually locking the computer with xautolock -locknow. Type: null or string Default: null Example: "${pkgs.i3lock}/bin/i3lock -i /path/to/img" Declared by: <nixpkgs/nixos/modules/services/x11/xautolock.nix>

## services.xserver.xautolock.time

Idle time (in minutes) to wait until xautolock locks the computer. Type: signed integer Default: 15 Declared by: <nixpkgs/nixos/modules/services/x11/xautolock.nix>
